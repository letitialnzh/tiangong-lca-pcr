import { searchTerms } from "./search-terms.ts";
import { decodeSearchEntries, readSearchTermDictionary, SEARCH_SCORE_SLOTS } from "./search-wire.ts";
import type {SearchResult} from "./types.ts";
interface SearchIndex {import(key:string,payload:string):void;search(query:string,options:{limit:number}):(string|number)[]}
interface SearchShard {index:SearchIndex;records:Map<string,SearchResult>}
const scope=self as DedicatedWorkerGlobalScope;
const engineUrl="./search-engine.mjs";
function record(value:unknown):value is Record<string,unknown> {return value!==null&&typeof value==="object"&&!Array.isArray(value);}
function searchRecord(value:unknown):value is SearchResult {
 return record(value)&&typeof value.id==="string"&&value.type==="page"&&typeof value.url==="string"&&typeof value.content==="string"&&typeof value.description==="string"
 &&(value.breadcrumbs===undefined||Array.isArray(value.breadcrumbs)&&value.breadcrumbs.every((item:unknown)=>typeof item==="string"));
}
async function createIndex(language:string):Promise<SearchIndex> {
 const engine:unknown=await import(engineUrl);
 if(!record(engine)||typeof engine.Index!=="function")throw new Error("Search engine is unavailable.");
 const index:unknown=Reflect.construct(engine.Index,[{tokenize:"strict",resolution:SEARCH_SCORE_SLOTS,encode:(value:unknown)=>searchTerms(value,language)}]);
 if(!record(index)||typeof index.import!=="function"||typeof index.search!=="function")throw new Error("Invalid search engine.");
 const importEntry=index.import,search=index.search;
 return {import(key,payload){importEntry.call(index,key,payload);},search(query,options){const result:unknown=search.call(index,query,options);if(!Array.isArray(result)||!result.every((hit:unknown)=>typeof hit==="string"||typeof hit==="number"&&Number.isFinite(hit)))throw new Error("Invalid search results.");return result;}};
}
let loaded:Promise<SearchShard[]>|undefined;
async function load(language:string):Promise<SearchShard[]> {
 const response=await fetch(`/generated/search/${encodeURIComponent(language)}/manifest.json`);
 if(!response.ok)throw new Error("Search index is unavailable.");
 const manifest:unknown=await response.json();
 if(!record(manifest)||(manifest.schemaVersion!==1&&manifest.schemaVersion!==2&&manifest.schemaVersion!==3&&manifest.schemaVersion!==4&&manifest.schemaVersion!==5)||manifest.language!==language||!Array.isArray(manifest.shards))throw new Error("Invalid search manifest.");
 if(manifest.schemaVersion!==5&&Object.hasOwn(manifest,"termDictionary"))throw new Error("Invalid serialized search data.");
 const dictionary=Object.hasOwn(manifest,"termDictionary")?readSearchTermDictionary(manifest.termDictionary):undefined;
 const packed=new Map<string,Set<number>>();
 for(const item of manifest.shards)if(record(item)&&Object.hasOwn(item,"entry")){
  if(manifest.schemaVersion!==5||typeof item.url!=="string"||!item.url.startsWith("/generated/search/")||typeof item.entry!=="number"||!Number.isSafeInteger(item.entry)||item.entry<0||typeof item.records!=="number"||!Number.isSafeInteger(item.records)||item.records<0)throw new Error("Invalid search shard.");
  const entries=packed.get(item.url)??new Set<number>();
  if(entries.has(item.entry))throw new Error("Invalid search shard.");
  entries.add(item.entry);packed.set(item.url,entries);
 }
 for(const entries of packed.values())for(const entry of entries)if(entry>=entries.size)throw new Error("Invalid search shard.");
 const payloads=new Map<string,unknown>(),shards:SearchShard[]=[];
 for(const item of manifest.shards){
  if(!record(item)||typeof item.url!=="string"||!item.url.startsWith("/generated/search/"))throw new Error("Invalid search shard.");
  if(!payloads.has(item.url)){
   const response=await fetch(item.url);if(!response.ok)throw new Error("Search shard is unavailable.");
   const payload:unknown=await response.json();payloads.set(item.url,payload);
  }
  let data:unknown=payloads.get(item.url);
  if(Object.hasOwn(item,"entry")){
   if(!record(data)||data.schemaVersion!==5||!Array.isArray(data.indexes)||data.indexes.length!==packed.get(item.url)?.size||typeof item.entry!=="number")throw new Error("Invalid serialized search data.");
   data=data.indexes[item.entry];
  }
  if(!record(data)||!record(data.entries)||!Array.isArray(data.records)||!data.records.every(searchRecord))throw new Error("Invalid serialized search data.");
  if(Object.hasOwn(item,"entry")&&data.records.length!==item.records)throw new Error("Invalid serialized search data.");
  if(manifest.schemaVersion!==3&&manifest.schemaVersion!==4&&manifest.schemaVersion!==5&&Object.hasOwn(data,"sparseMaps"))throw new Error("Invalid serialized search data.");
  if(manifest.schemaVersion!==4&&manifest.schemaVersion!==5&&(Object.hasOwn(data,"scoreMasks")||Object.hasOwn(data,"postingDeltas")||Object.hasOwn(data,"columnarMaps")))throw new Error("Invalid serialized search data.");
  if(manifest.schemaVersion!==5&&(Object.hasOwn(data,"joinedTerms")||Object.hasOwn(data,"dictionaryTerms")))throw new Error("Invalid serialized search data.");
  const entries=(manifest.schemaVersion===3||manifest.schemaVersion===4||manifest.schemaVersion===5)?decodeSearchEntries(data.entries,data.sparseMaps,manifest.schemaVersion,data.scoreMasks,data.postingDeltas,data.columnarMaps,data.joinedTerms,dictionary,data.dictionaryTerms):data.entries;
  const index=await createIndex(language);
  for(const [key,payload]of Object.entries(entries)){
   let serialized:string;
   if(manifest.schemaVersion===1){if(typeof payload!=="string")throw new Error("Invalid serialized search data.");serialized=payload;}
   else{if(!Array.isArray(payload))throw new Error("Invalid serialized search data.");serialized=JSON.stringify(payload);}
   index.import(key,serialized);
  }
  shards.push({index,records:new Map(data.records.map(record=>[record.id,record]))});
 }
 return shards;
}
scope.onmessage=async ({data}:MessageEvent<unknown>)=>{
 const id=record(data)?data.id:undefined;
 try {
  if(!record(data)||typeof data.query!=="string"||typeof data.language!=="string")throw new Error("Invalid search request.");
  const {query,language}=data;
  loaded??=load(language);
  const shards=await loaded,results:SearchResult[]=[],seen=new Set<string>();
  for(const shard of shards)for(const hit of shard.index.search(query,{limit:30})){const record=shard.records.get(String(hit));if(record&&!seen.has(record.url)){seen.add(record.url);results.push(record);}}
  const normalized=query.trim().toLowerCase();
  const rank=(title:string)=>{const value=title.toLowerCase();return(value===normalized?100:value.startsWith(normalized)?50:value.includes(normalized)?20:0)-value.length/10000;};
  results.sort((a,b)=>rank(b.content)-rank(a.content)||a.content.localeCompare(b.content,language));
  scope.postMessage({id,results:results.slice(0,30)});
 }catch(error){loaded=undefined;scope.postMessage({id,error:error instanceof Error?error.message:"Search failed."});}
};
