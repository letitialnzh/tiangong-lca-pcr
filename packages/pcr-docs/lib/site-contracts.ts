import type {DocPage,Download,Language,PcrRecord,SiteManifest} from './types.ts';
type Data=Record<string,unknown>;
const record=(value:unknown):value is Data=>value!==null&&typeof value==='object'&&!Array.isArray(value);
const strings=(value:unknown):value is string[]=>Array.isArray(value)&&value.every(item=>typeof item==='string');
const textMap=(value:unknown):value is Record<string,string>=>record(value)&&Object.values(value).every(item=>typeof item==='string');
const nullableText=(value:unknown):value is string|null=>value===null||typeof value==='string';
const finite=(value:unknown):value is number=>typeof value==='number'&&Number.isFinite(value);
const downloads=(value:unknown):value is Download[]=>Array.isArray(value)&&value.every(item=>record(item)&&['name','url','sha256'].every(key=>typeof item[key]==='string')&&finite(item.bytes));
function language(value:unknown):value is Language {return record(value)&&['code','route','label','htmlLang'].every(key=>typeof value[key]==='string')&&typeof value.required==='boolean';}
function pcrRecord(value:unknown):value is PcrRecord {
 if(!record(value)||!['id','status','maturity','sourcePath','dataPath','dataUrl'].every(key=>typeof value[key]==='string')||!strings(value.slug)||!record(value.title)||!Object.values(value.title).every(nullableText)||!nullableText(value.version)||!nullableText(value.updatedAt)||!textMap(value.translationStatus)||!textMap(value.urls)||!record(value.pages)||!Object.values(value.pages).every(strings)||!downloads(value.downloads)||!record(value.modules)||!Object.values(value.modules).every(strings)||!record(value.readiness)||typeof value.readiness.status!=='string')return false;
 for(const key of ['blockers','warnings']){const issues=value.readiness[key];if(!Array.isArray(issues)||!issues.every(issue=>record(issue)&&typeof issue.code==='string'&&typeof issue.message==='string'))return false;}
 return Array.isArray(value.classificationRefs)&&value.classificationRefs.every(ref=>record(ref)&&['system','version','code'].every(key=>typeof ref[key]==='string')&&['title','mapping_type'].every(key=>ref[key]===undefined||typeof ref[key]==='string'))
 &&(value.versions===undefined||Array.isArray(value.versions)&&value.versions.every(version=>record(version)&&typeof version.version==='string'&&textMap(version.urls)));
}
function page(value:unknown):value is DocPage {
 if(!record(value)||!['key','kind','language','locale','url','title','description','canonical'].every(key=>typeof value[key]==='string')||!['pcr','module','catalog','coverage','guide'].includes(String(value.kind))||!strings(value.slugs)||typeof value.indexable!=='boolean'||!textMap(value.alternates)||!strings(value.sourceNodeIds)||!Array.isArray(value.toc)||!value.toc.every(item=>record(item)&&typeof item.title==='string'&&typeof item.url==='string'&&finite(item.depth)))return false;
 for(const key of ['pcrId','recordVersion','currentUrl','currentLanguage','lastModified','moduleId','domain','subdomain','htmlPath','sourcePath','sourceSha256','sourceHeadingId','sourceHeadingAnchor'])if(value[key]!==undefined&&typeof value[key]!=='string')return false;
 return (value.downloads===undefined||downloads(value.downloads))&&(value.part===undefined||record(value.part)&&finite(value.part.index)&&finite(value.part.total)&&typeof value.part.label==='string');
}
/** Narrow generated metadata at the filesystem boundary; fidelity remains the export verifier's job. */
export function assertSiteManifest(value:unknown):asserts value is SiteManifest {
 if(!record(value)||value.schemaVersion!==1||!['sourceCommit','sourceDate','generatorVersion','origin','defaultLocale'].every(key=>typeof value[key]==='string')||!Array.isArray(value.languages)||!value.languages.every(language)||!Array.isArray(value.records)||!value.records.every(pcrRecord)||!Array.isArray(value.pages)||!value.pages.every(page)||!Array.isArray(value.domains)||!value.domains.every(domain=>record(domain)&&typeof domain.slug==='string'&&textMap(domain.title)&&finite(domain.count))||!Array.isArray(value.coverage)||!value.coverage.every(coverage=>record(coverage)&&typeof coverage.system==='string'&&typeof coverage.version==='string'&&record(coverage.summary)&&Object.values(coverage.summary).every(finite)&&textMap(coverage.url)&&typeof coverage.downloadUrl==='string')||!record(value.counts)||!['pcrs','pages','sourceBytes','languages'].every(key=>finite((value.counts as Data)[key]))||(value.historicalRecords!==undefined&&(!Array.isArray(value.historicalRecords)||!value.historicalRecords.every(pcrRecord)))||(value.categoryTitles!==undefined&&(!record(value.categoryTitles)||!Object.values(value.categoryTitles).every(textMap))))throw new TypeError('Invalid generated PCR site manifest.');
}
export function parseSiteManifest(text:string|Uint8Array):SiteManifest {const raw:unknown=JSON.parse(typeof text==='string'?text:new TextDecoder().decode(text));assertSiteManifest(raw);return raw;}
