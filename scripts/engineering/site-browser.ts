import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {constants, closeSync, existsSync, fstatSync, lstatSync, mkdirSync, openSync, readFileSync, readdirSync, realpathSync, writeFileSync} from 'node:fs';
import {createServer} from 'node:http';
import type {Server} from 'node:http';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createRequire} from 'node:module';
import {chromium, firefox, webkit} from 'playwright';
import type {Page, Browser, BrowserType, Request, Response} from 'playwright';
import { gettingStartedGuide } from '../../packages/pcr-docs/lib/getting-started.ts';
import { LANGUAGE_PREFERENCE_KEY, preferredRoute } from '../../packages/pcr-docs/lib/language-preference.ts';

export class SiteBrowserError extends Error {
  readonly code:string;
  constructor(code:string,message:string,options?:ErrorOptions){super(message,options);this.name='SiteBrowserError';this.code=code;}
}
export interface SiteBrowserOptions {root:string;report:string}
export interface ExportFile {path:string;bytes:number;sha256:string}
export interface SiteRoute {kind:'home'|'catalog'|'pcr'|'module'|'history'|'guide';locale:'en'|'zh'|'default';path:string}
export interface SiteExport {root:string;files:ExportFile[];treeSha256:string;bytes:number;source:Record<string,unknown>;routes:SiteRoute[];availability:{locale:string;kind:string;present:boolean}[]}
function object(value:unknown):value is Record<string,unknown>{return typeof value==='object'&&value!==null&&!Array.isArray(value);}
function failure(code:string,message:string):never {throw new SiteBrowserError(code,message);}
function contained(root:string,file:string){const rel=path.relative(root,file);return rel!==''&&!rel.startsWith('..'+path.sep)&&rel!=='..'&&!path.isAbsolute(rel);}
function readRegular(root:string,relative:string):Buffer {
 const file=path.resolve(root,relative);if(!contained(root,file))failure('SITE_EXPORT_PATH','Export path escapes its root.');
 let current=root;for(const part of path.relative(root,file).split(path.sep)){current=path.join(current,part);const stat=lstatSync(current);if(stat.isSymbolicLink())failure('SITE_EXPORT_PATH','Export inputs must not contain symbolic links.');}
 const fd=openSync(file,constants.O_RDONLY|constants.O_NOFOLLOW|constants.O_NONBLOCK);
 try {if(!fstatSync(fd).isFile())failure('SITE_EXPORT_PATH','Export input must be a regular file.');return readFileSync(fd);}finally{closeSync(fd);}
}
function readIdentityJson(root:string,key:string):unknown {try{const value:unknown=JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(readRegular(root,key)));const finite=(item:unknown):boolean=>typeof item==='number'?Number.isFinite(item):Array.isArray(item)?item.every(finite):object(item)?Object.values(item).every(finite):true;if(!finite(value))failure('SITE_EXPORT_IDENTITY','Identity contains a nonfinite number.');return value;}catch(error){if(error instanceof SiteBrowserError)throw error;throw new SiteBrowserError('SITE_EXPORT_IDENTITY','Invalid UTF-8/JSON identity: '+key,{cause:error});}}
function hash(bytes:Buffer|string){return createHash('sha256').update(bytes).digest('hex');}
export function parseSiteBrowserArguments(args:readonly string[]):SiteBrowserOptions|'help' {
 if(args.length===1&&args[0]==='--help')return 'help';
 const values:Record<string,string>={};
 for(let i=0;i<args.length;i+=2){const key=args[i],value=args[i+1];if((key!=='--root'&&key!=='--report')||!value||value.startsWith('--')||values[key]!==undefined)failure('SITE_BROWSER_ARGUMENT','Expected exactly --root <existing export> and --report <new evidence directory>.');values[key]=value;}
 if(!values['--root']||!values['--report'])failure('SITE_BROWSER_ARGUMENT','Both --root and --report are required.');
 return {root:path.resolve(values['--root']),report:path.resolve(values['--report'])};
}
export function inspectSiteExport(input:string):SiteExport {
 const root=path.resolve(input);if(!existsSync(root)||lstatSync(root).isSymbolicLink()||!lstatSync(root).isDirectory())failure('SITE_EXPORT_INPUT','Root must be an existing export directory.');
 const canonical=realpathSync(root),files:ExportFile[]=[];
 function visit(relative:string){for(const entry of readdirSync(path.join(canonical,relative),{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name,'en'))){const key=relative?relative+'/'+entry.name:entry.name;if(entry.isSymbolicLink())failure('SITE_EXPORT_PATH','Export inputs must not contain symbolic links.');if(entry.isDirectory())visit(key);else if(entry.isFile()){const bytes=readRegular(canonical,key);files.push({path:key,bytes:bytes.length,sha256:hash(bytes)});}else failure('SITE_EXPORT_PATH','Export inputs must be regular files or directories.');}}
 visit('');
 const fileSet=new Set(files.map(file=>file.path));if(files.some(file=>/\.(?:ts|tsx|mts|cts)$/u.test(file.path)))failure('SITE_EXPORT_INPUT','Browser exports must not contain raw TypeScript source.');
 for(const key of ['index.html','en/index.html','zh/index.html','en/docs/pcr/index.html','zh/docs/pcr/index.html','generated/version.json','generated/product-release.json','generated/search-worker.mjs','en/docs/getting-started/index.html','zh/docs/getting-started/index.html'])if(!fileSet.has(key))failure('SITE_EXPORT_INPUT','Missing required exported input: '+key);
 const source=readIdentityJson(canonical,'generated/version.json');
 if(!object(source)||typeof source.sourceCommit!=='string'||! /^[a-f0-9]{40,64}$/u.test(source.sourceCommit)||typeof source.sourceFingerprint!=='string'||!/^sha256:[a-f0-9]{64}$/u.test(source.sourceFingerprint))failure('SITE_EXPORT_IDENTITY','Version metadata must bind sourceCommit and sourceFingerprint.');
 const release=readIdentityJson(canonical,'generated/product-release.json');
 if(!object(release)||release.sourceCommit!==source.sourceCommit||release.sourceFingerprint!==source.sourceFingerprint)failure('SITE_EXPORT_IDENTITY','Version and product identity disagree.');
 const routes:SiteRoute[]=[{kind:'home',locale:'default',path:'/'}],availability:SiteExport['availability']=[];
 for(const locale of ['en','zh'] as const){routes.push({kind:'guide',locale,path:gettingStartedGuide(locale).url},{kind:'home',locale,path:`/${locale}/`},{kind:'catalog',locale,path:`/${locale}/docs/pcr/`});
  const candidates=files.filter(file=>file.path.startsWith(`${locale}/docs/pcr/`)&&file.path.endsWith('/index.html')&&file.path.split('/').length===7).sort((a,b)=>b.bytes-a.bytes||a.path.localeCompare(b.path,'en'));
  if(!candidates[0])failure('SITE_EXPORT_INPUT','No exported PCR leaf for '+locale);routes.push({kind:'pcr',locale,path:'/'+candidates[0].path.slice(0,-10)});
  for(const kind of ['module','history'] as const){const candidate=files.filter(file=>file.path.startsWith(`${locale}/docs/`)&&file.path.endsWith('/index.html')&&(kind==='module'?file.path.includes('/modules/'):file.path.includes('/versions/'))).sort((a,b)=>b.bytes-a.bytes||a.path.localeCompare(b.path,'en'))[0];availability.push({locale,kind,present:!!candidate});if(candidate)routes.push({kind,locale,path:'/'+candidate.path.slice(0,-10)});}
 }
 if(!availability.some(item=>item.kind==='module'&&item.present))failure('SITE_EXPORT_INPUT','No exported module page.');
 return {root:canonical,files,treeSha256:hash(files.map(file=>`${file.path}\0${file.bytes}\0${file.sha256}\n`).join('')),bytes:files.reduce((sum,file)=>sum+file.bytes,0),source,routes,availability};
}
export function prepareSiteBrowserReport(report:string,root:string):string {
 const output=path.resolve(report),canonicalRoot=realpathSync(root);
 let parent=path.dirname(output),suffix=path.basename(output);while(!existsSync(parent)){suffix=path.basename(parent)+path.sep+suffix;parent=path.dirname(parent);}
 const resolved=path.join(realpathSync(parent),suffix);
 if(resolved===canonicalRoot||contained(canonicalRoot,resolved)||contained(resolved,canonicalRoot))failure('SITE_BROWSER_REPORT','Report must be outside the export tree.');
 if(existsSync(output))failure('SITE_BROWSER_REPORT','Report directory must be new; existing evidence is never overwritten.');
 mkdirSync(output,{recursive:true});return realpathSync(output);
}
const mime:Record<string,string>={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.txt':'text/plain; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.woff2':'font/woff2','.ico':'image/x-icon','.xml':'application/xml'};
export async function withSiteExportServer<T>(root:string,callback:(origin:string)=>Promise<T>):Promise<T> {
 const canonical=realpathSync(root);
 const server=createServer((request,response)=>{try{
  const raw=(request.url??'/').split('?')[0]!;const decoded=decodeURIComponent(raw);
  if(!decoded.startsWith('/')||decoded.includes('\\')||decoded.includes('\0')||decoded.split('/').some(segment=>segment==='.'||segment==='..')||/%(?:2f|5c)/iu.test(raw)){response.writeHead(403);response.end('Forbidden');return;}
  let relative=decoded.slice(1);if(relative===''||decoded.endsWith('/'))relative+='index.html';else if(existsSync(path.join(canonical,relative))&&lstatSync(path.join(canonical,relative)).isDirectory())relative+='/index.html';
  const bytes=readRegular(canonical,relative);response.writeHead(200,{'content-type':mime[path.extname(relative)]??'application/octet-stream','cache-control':'no-store','content-length':bytes.length});response.end(request.method==='HEAD'?undefined:bytes);
 }catch(error){response.writeHead(error instanceof SiteBrowserError?403:404);response.end('Not found');}});
 await new Promise<void>((resolve,reject)=>{server.once('error',reject);server.listen(0,'127.0.0.1',resolve);});
 try {const address=server.address();assert.ok(address&&typeof address==='object');return await callback(`http://127.0.0.1:${address.port}`);}finally{await closeServer(server);}
}
async function closeServer(server:Server){server.closeAllConnections();await new Promise<void>((resolve,reject)=>server.close(error=>error?reject(error):resolve()));}
export type SiteBrowserEngine = 'chromium'|'firefox'|'webkit';
export interface CancelledRequest {
 engine:SiteBrowserEngine;url:string;reason:string;method:string;headers:Record<string,string>;
 resourceType:string;isNavigationRequest:boolean;status?:number|undefined;
 startedAtMs?:number|null;failedAtMs?:number;startPhase?:string|null;failurePhase?:string;actualUrl?:string;viewport?:string;
}
const cancellationReasons:Record<SiteBrowserEngine,readonly string[]>={chromium:['net::ERR_ABORTED'],firefox:['NS_BINDING_ABORTED'],webkit:['cancelled','Load request cancelled']};
export function isCancelledSitePrefetch(request:CancelledRequest,prefetchUrls:readonly string[]):boolean {
 if(!cancellationReasons[request.engine]?.includes(request.reason)||request.isNavigationRequest!==false
  ||!['fetch','xhr','other'].includes(request.resourceType)||!['GET','HEAD'].includes(request.method)
  ||(request.status!==undefined&&(request.status<200||request.status>=300)))return false;
 if(request.headers['next-router-prefetch']==='1'||request.headers['purpose']==='prefetch'||/(?:^|[;\s,])prefetch(?:$|[;\s,])/u.test(request.headers['sec-purpose']??''))return true;
 // A cancelled successful HEAD probe requires an observed explicit segment
 // prefetch on this page. A route-looking URL alone is never prefetch evidence.
 if(request.method!=='HEAD'||request.status!==200)return false;
 try {const probe=new URL(request.url);return prefetchUrls.some(value=>{const next=new URL(value);return next.origin===probe.origin&&next.pathname===probe.pathname.replace(/\/?$/u,'/')+'__next._tree.txt';});}catch{return false;}
}
type FailureRequest = Pick<Request,'url'|'failure'|'method'|'headers'|'resourceType'|'isNavigationRequest'>;
interface FailureContext {engine:SiteBrowserEngine;viewport:string;startedAtMs:number|null;failedAtMs:number;startPhase:string|null;failurePhase:string;actualUrl:string}
/** Retain classification evidence without collecting cookies or arbitrary headers. */
export function captureCancelledSiteRequest(request:FailureRequest,context:FailureContext,status?:number):CancelledRequest {
 const headers=request.headers(),selected:Record<string,string>={};
 for(const key of ['next-router-prefetch','next-router-segment-prefetch','rsc','purpose','sec-purpose','sec-fetch-mode','sec-fetch-dest'])if(headers[key]!==undefined)selected[key]=headers[key];
 return {engine:context.engine,viewport:context.viewport,startedAtMs:context.startedAtMs,failedAtMs:context.failedAtMs,startPhase:context.startPhase,failurePhase:context.failurePhase,actualUrl:context.actualUrl,url:request.url(),reason:request.failure()?.errorText??'unknown',method:request.method(),headers:selected,resourceType:request.resourceType(),isNavigationRequest:request.isNavigationRequest(),status};
}
function observeSiteRequests(page:Page,context:{engine:SiteBrowserEngine;viewport:string},failedRequests:CancelledRequest[],prefetchUrls:string[]) {
 let phase='page-check';const starts=new WeakMap<Request,{at:number;phase:string}>(),responses=new WeakMap<Request,number>();
 const started=(request:Request)=>{starts.set(request,{at:Date.now(),phase});if(request.headers()['next-router-prefetch']==='1'&&!request.isNavigationRequest()&&request.method()==='GET'&&['fetch','xhr','other'].includes(request.resourceType()))prefetchUrls.push(request.url());};
 const response=(received:Response)=>responses.set(received.request(),received.status());
 const failed=(request:Request)=>{const start=starts.get(request);failedRequests.push(captureCancelledSiteRequest(request,{...context,startedAtMs:start?.at??null,failedAtMs:Date.now(),startPhase:start?.phase??null,failurePhase:phase,actualUrl:page.url()},responses.get(request)));};
 page.on('request',started);page.on('response',response);page.on('requestfailed',failed);
 return {setPhase(value:string){phase=value;},stop(){page.off('request',started);page.off('response',response);page.off('requestfailed',failed);}};
}
interface BrowserEvidence {engine:string;engineVersion:string;viewport:string;route:SiteRoute;assertions:string[];errors:string[];ignoredPrefetchAborts:string[];requestFailures:CancelledRequest[];prefetchUrls:string[];screenshot:string;screenshots?:string[];diagnosticError?:string;search?:{query:string;hits:number;workerUrls:string[]};failure?:string}
interface LanguagePreferenceEvidence {engine:SiteBrowserEngine;viewport:string;checks:string[];ignoredPrefetchAborts:string[];requestFailures:CancelledRequest[];prefetchUrls:string[]}
function message(error:unknown){return error instanceof Error?error.message:String(error);}
async function captureSiteEvidence(page:Page,report:string,file:string):Promise<string[]> {
 const size=await page.evaluate(()=>({height:document.documentElement.scrollHeight,viewport:window.innerHeight}));
 if(size.height<=16_000){await page.screenshot({path:path.join(report,file),fullPage:true});return [file];}
 const names:string[]=[];for(const [label,y] of [['top',0],['middle',Math.floor((size.height-size.viewport)/2)],['bottom',size.height-size.viewport]] as const){await page.evaluate(position=>window.scrollTo(0,position),y);await page.evaluate(()=>new Promise<void>(resolve=>requestAnimationFrame(()=>requestAnimationFrame(()=>resolve()))));const name=label==='top'?file:file.replace(/\.png$/u,'-'+label+'.png');await page.screenshot({path:path.join(report,name),fullPage:false});names.push(name);}
 await page.evaluate(()=>window.scrollTo(0,0));await page.waitForLoadState('networkidle');return names;
}
async function checkPage(page:Page,origin:string,route:SiteRoute,viewport:string,evidence:BrowserEvidence,exported:SiteExport){
 const response=await page.goto(origin+route.path,{waitUntil:'networkidle',timeout:45_000});assert.equal(response?.status(),200);await page.locator('h1').first().waitFor();
 evidence.assertions.push('HTTP 200 and rendered h1');
 const expectedLocale=route.locale==='default'?'zh':route.locale;
 const brand=expectedLocale==='zh'?'天工产品类别规则':'TianGong PCR';assert.equal(await page.locator('.pcr-brand-name').first().innerText(),brand);evidence.assertions.push('locale brand');
 const dimensions=await page.evaluate(()=>({viewport:window.innerWidth,width:document.documentElement.scrollWidth}));assert.ok(dimensions.width<=dimensions.viewport+1,`Horizontal overflow: ${dimensions.width} > ${dimensions.viewport}`);evidence.assertions.push('no horizontal overflow');
 if(route.kind==='guide'){
  const guide=gettingStartedGuide(expectedLocale),chinese=expectedLocale==='zh',button=chinese?'复制 Agent 提示词':'Copy Agent prompt';
  const prompt=await page.locator('#getting-started-content pre code').first().textContent();assert.ok(prompt?.includes(chinese?'创建 [产品] 的 LCA 数据':'help me create LCA data for [product]'));
  await page.evaluate(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async(text:string)=>{document.documentElement.dataset.copiedPrompt=text;}}}));
  await page.getByRole('button',{name:button,exact:true}).click();await page.getByRole('status').filter({hasText:chinese?'提示词已复制':'Agent prompt copied.'}).waitFor();assert.equal(await page.locator('html').getAttribute('data-copied-prompt'),prompt);evidence.assertions.push('copy invokes clipboard with exact displayed Agent prompt');
  await page.evaluate(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async()=>{throw new Error('Clipboard denied');}}}));
  await page.getByRole('button',{name:button,exact:true}).click();await page.getByRole('status').filter({hasText:chinese?'无法自动复制':'Copy was unavailable.'}).waitFor();evidence.assertions.push('clipboard denial shows manual-copy fallback');
  assert.equal(await page.getByRole('link',{name:chinese?'阅读 Markdown':'Read Markdown',exact:true}).getAttribute('href'),guide.rawUrl);
 }
 if(route.kind!=='home'){
  const toc=await page.evaluate(()=>Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')).filter(a=>a.getAttribute('href')!=='#').map(a=>({href:a.getAttribute('href')!,found:!!document.getElementById(decodeURIComponent(a.hash.slice(1)))})));
  if(route.kind==='pcr')assert.ok(toc.length>0,'Document must expose anchors');assert.ok(toc.every(anchor=>anchor.found),'TOC/local anchor points to a missing element');evidence.assertions.push(`local TOC anchors resolve (${toc.length})`);
  if(viewport==='mobile'){await page.getByRole('button',{name:expectedLocale==='zh'?'打开侧栏':'Open sidebar',exact:true}).first().click();await page.locator('#nd-sidebar-mobile').waitFor({state:'visible'});}
  const mainLinks=await page.locator((viewport==='mobile'?'#nd-sidebar-mobile':'#nd-sidebar')+' a[href]').evaluateAll(links=>links.map(link=>link.getAttribute('href')!));
  for(const target of [gettingStartedGuide(expectedLocale).url,`/${expectedLocale}/docs/pcr/`])assert.equal(mainLinks.filter(href=>href===target).length,1,'Main documentation entry must appear exactly once: '+target);
  assert.equal(mainLinks.filter(href=>href.startsWith(`/${expectedLocale}/docs/coverage/`)).length,1,'Classification coverage must appear once');evidence.assertions.push('single guide, library and coverage sidebar entries');
  const sidebar=await page.locator((viewport==='mobile'?'#nd-sidebar-mobile':'#nd-sidebar')+' a[href]').evaluateAll(links=>links.map(link=>link.getAttribute('href')!).filter(href=>/^\/(?:en|zh)\/docs\/pcr\/[^/]+\/[^/]+\/[^/]+\/?$/u.test(href)));
  if(route.kind==='pcr')assert.ok(sidebar.length>0,'Sidebar must expose PCR leaf links');for(const href of sidebar)assert.ok(exported.files.some(file=>file.path===href.replace(/^\//u,'').replace(/\/?$/u,'/')+'index.html'),'Missing sidebar leaf '+href);evidence.assertions.push(`sidebar PCR leaves resolve (${sidebar.length})`);
  if(viewport==='mobile'){await page.locator('#nd-sidebar-mobile').getByRole('button',{name:expectedLocale==='zh'?'关闭侧栏':'Close sidebar',exact:true}).click();await page.locator('#nd-sidebar-mobile').waitFor({state:'hidden'});evidence.assertions.push('mobile sidebar opens and closes');}
 }
}
async function checkSearch(page:Page,route:SiteRoute,evidence:BrowserEvidence){
 const locale=route.locale==='zh'?'zh':'en',heading=await page.locator('h1').first().innerText();
 const query=locale==='zh'?(heading.match(/[\p{Script=Han}]{2,}/u)?.[0].slice(0,2)??'产品'):(heading.match(/[A-Za-z]{3,}/u)?.[0]??'PCR');
 const workers:string[]=[];evidence.search={query,hits:0,workerUrls:workers};page.on('worker',worker=>workers.push(worker.url()));
 const triggers=page.locator('button[data-search], button[data-search-full]');let clicked=false;for(let i=0;i<await triggers.count();i++){const trigger=triggers.nth(i);if(await trigger.evaluate(button=>{const rect=button.getBoundingClientRect();const hit=document.elementFromPoint(rect.x+rect.width/2,rect.y+rect.height/2);return rect.width>0&&rect.height>0&&hit!==null&&button.contains(hit);})){await trigger.click();clicked=true;break;}}assert.ok(clicked,'No unobstructed search trigger');
 const dialog=page.locator('[data-pcr-search]');await dialog.waitFor({state:'visible'});await page.getByLabel(locale==='zh'?'搜索 PCR、领域或关键词…':'Search PCRs, domains, or keywords…',{exact:true}).fill(query);
 await page.waitForFunction(()=>{const dialog=document.querySelector('[data-pcr-search]');return !!dialog?.querySelector('.pcr-search-footer, .pcr-search-error')||/^(没有匹配的 PCR|No PCR matches)/u.test(dialog?.querySelector('[role="status"]')?.textContent??'');},{},{timeout:45_000});assert.ok(await dialog.locator('.pcr-search-footer').count(),`Search returned no results for ${query}: ${await dialog.innerText()}`);const links=dialog.locator('button[aria-selected]');const hits=await links.count();assert.ok(hits>0,'Search must return actual result buttons');assert.ok(workers.some(url=>new URL(url,page.url()).href===new URL('/generated/search-worker.mjs',page.url()).href),'Search must use the emitted Worker');
 evidence.search={query,hits,workerUrls:workers};evidence.assertions.push('emitted Worker returns search results');const origin=new URL(page.url()).origin;await links.first().click();await page.waitForLoadState('networkidle');assert.equal(new URL(page.url()).origin,origin);assert.ok(new URL(page.url()).pathname.startsWith(`/${locale}/docs/`));await page.locator('h1').first().waitFor();evidence.assertions.push('search result navigation');
}
/** Exercise the shipped selector and neutral entry rather than a second implementation. */
async function openLanguageSelector(page:Page):Promise<void> {
 const triggers=page.locator('[data-pcr-language-trigger]');
 async function clickVisible(){for(let index=0;index<await triggers.count();index++){const trigger=triggers.nth(index);if(await trigger.isVisible()){await trigger.click();return true;}}return false;}
 if(await clickVisible())return;
 const menus=page.getByRole('button',{name:/^(Toggle menu|切换菜单|Open sidebar|打开侧栏)$/iu});
 for(let index=0;index<await menus.count();index++)if(await menus.nth(index).isVisible()){await menus.nth(index).click();break;}
 await page.waitForFunction(()=>Array.from(document.querySelectorAll<HTMLElement>('[data-pcr-language-trigger]')).some(button=>button.getBoundingClientRect().width>0));
 assert.ok(await clickVisible(),'Language selector must be visible');
}
async function checkGuideCounterpart(page:Page,origin:string,route:SiteRoute,evidence:BrowserEvidence,setPhase:(phase:string)=>void):Promise<void> {
 const counterpart=gettingStartedGuide(route.locale==='zh'?'en':'zh');
 setPhase('guide-counterpart-entry');await page.goto(origin+route.path+'?from=getting-started',{waitUntil:'networkidle'});
 setPhase('guide-counterpart-select');await openLanguageSelector(page);
 const target=origin+counterpart.url+'?from=getting-started';
 const [response]=await Promise.all([
  page.waitForResponse(received=>received.url()===target&&received.request().isNavigationRequest()
   &&received.request().resourceType()==='document'&&received.request().frame()===page.mainFrame()),
  page.getByRole('button',{name:counterpart.locale==='zh'?'中文':'English',exact:true}).last().click(),
 ]);
 assert.equal(response.status(),200);assert.match(response.headers()['content-type']??'',/^text\/html(?:;|$)/iu);
 await page.waitForURL(target);await settleLanguage(page,counterpart.language);
 await page.getByRole('button',{name:counterpart.locale==='zh'?'复制 Agent 提示词':'Copy Agent prompt',exact:true}).waitFor({state:'visible'});
 assert.ok((await page.locator('#getting-started-content pre code').first().textContent())?.includes(counterpart.rawUrl));
 evidence.assertions.push('language selector loads HTTP 200 HTML document for authored guide counterpart and preserves query');
 setPhase('guide-counterpart-return');await page.goto(origin+route.path,{waitUntil:'networkidle'});
}
async function settleLanguage(page:Page,language:string):Promise<void> {
 await page.waitForFunction(expected=>document.documentElement.lang===expected,language);
 await page.locator('h1').first().waitFor({state:'visible'});
 await page.waitForLoadState('networkidle');
}
export function emittedLanguageCodes(exported:Pick<SiteExport,'root'|'files'>):Record<string,string> {
 const codes:Record<string,string>={};
 for(const file of exported.files){
  const route=/^([a-z]{2,3}(?:-[a-z0-9]{2,8})*)\/index\.html$/iu.exec(file.path)?.[1];
  if(!route)continue;
  const tag=/<html\b[^>]*\blang=(?:"([^"]+)"|'([^']+)')/iu.exec(readRegular(exported.root,file.path).toString('utf8'));
  const language=tag?.[1]??tag?.[2];assert.ok(language,'Exported locale home must declare its HTML language: '+route);
  codes[route]=language;
 }
 assert.ok(codes.en&&codes.zh,'Qualification requires the emitted English and Chinese homes');
 return codes;
}
/** Bounded probes never call a registered optional language unsupported. */
export function browserLanguageScenarios(languageCodes:Readonly<Record<string,string>>) {
 const supportedBases=new Set([...Object.keys(languageCodes),...Object.values(languageCodes)].map(code=>code.split('-')[0]?.toLowerCase()));
 const unsupported=['fr-FR','ja-JP','ko-KR','ru-RU','ar-SA','hi-IN','sw-KE','eo'].filter(code=>!supportedBases.has(code.split('-')[0]?.toLowerCase())).slice(0,2);
 const inputs:{name:string;languages:string[];saved?:string}[]=[
  {name:'regional English',languages:['en-GB']},
  {name:'ordered regional Chinese',languages:[...unsupported.slice(0,1),'zh-HK','en-US']},
  {name:unsupported.length?'unsupported language fallback':'missing browser language fallback',languages:unsupported},
  {name:'invalid saved preference',languages:['en-US'],saved:'deleted-language'},
  {name:'saved English overrides Chinese browser',languages:['zh-CN'],saved:'en'},
  {name:'saved Chinese overrides English browser',languages:['en-GB'],saved:'zh'},
 ];
 return inputs.map(scenario=>{
  const route=preferredRoute(languageCodes,scenario.languages,scenario.saved??null),language=languageCodes[route];
  assert.ok(language,'Browser scenario must resolve to an emitted language');
  return {...scenario,expected:route==='zh'?'/':`/${route}/`,htmlLanguage:language};
 });
}
/** SPA navigation can retain Playwright's old networkidle lifecycle. Observe current requests. */
function currentNetworkIdle(page:Page):()=>Promise<void> {
 const active=new Set<Request>();let lastActivity=Date.now();
 page.on('request',request=>{active.add(request);lastActivity=Date.now();});
 const finished=(request:Request)=>{active.delete(request);lastActivity=Date.now();};
 page.on('requestfinished',finished);page.on('requestfailed',finished);
 return async()=>{
  await page.evaluate(()=>new Promise<void>(resolve=>requestAnimationFrame(()=>requestAnimationFrame(()=>resolve()))));
  const deadline=Date.now()+30_000;
  while(active.size>0||Date.now()-lastActivity<500){assert.ok(Date.now()<deadline,'Current browser requests did not settle');await new Promise<void>(resolve=>setTimeout(resolve,50));}
 };
}
async function checkLanguagePreferences(browser:Browser,origin:string,viewport:{width:number;height:number},documentPath:string,languageCodes:Readonly<Record<string,string>>,evidence:LanguagePreferenceEvidence):Promise<void> {
 const {checks,ignoredPrefetchAborts,requestFailures:failedRequests,prefetchUrls}=evidence;
 for(const scenario of browserLanguageScenarios(languageCodes)){
  const context=await browser.newContext({viewport,locale:scenario.languages[0]??languageCodes.en!});
  try {
   await context.addInitScript(({languages,saved,key})=>{
    Object.defineProperty(navigator,'languages',{configurable:true,get:()=>languages});
    Object.defineProperty(navigator,'language',{configurable:true,get:()=>languages[0]??''});
    if(saved)window.localStorage.setItem(key,saved);
   },{languages:[...scenario.languages],saved:scenario.saved??null,key:LANGUAGE_PREFERENCE_KEY});
   const page=await context.newPage();await page.goto(origin+'/?from=language-check#reader',{waitUntil:'networkidle'});
   await page.waitForURL(origin+scenario.expected+'?from=language-check#reader');
   await settleLanguage(page,scenario.htmlLanguage);
   assert.equal(await page.evaluate(key=>window.localStorage.getItem(key),LANGUAGE_PREFERENCE_KEY),scenario.saved??null,'Automatic detection must not save a preference');
   checks.push(scenario.name+' preserves query/fragment without persisting detection');
  }finally{await context.close();}
 }
 const context=await browser.newContext({viewport,locale:'en-US'});
 try {
  const page=await context.newPage();await page.goto(origin+'/en/?from=manual#reader',{waitUntil:'networkidle'});
  async function selectLanguage(name:string){
   await openLanguageSelector(page);await page.getByRole('button',{name,exact:true}).last().click();await page.waitForLoadState('networkidle');
  }
  await selectLanguage('中文');await page.waitForURL(origin+'/zh/?from=manual#reader');
  await settleLanguage(page,languageCodes.zh!);
  assert.equal(await page.evaluate(key=>window.localStorage.getItem(key),LANGUAGE_PREFERENCE_KEY),'zh');
  await page.reload({waitUntil:'networkidle'});assert.equal(new URL(page.url()).pathname,'/zh/');
  checks.push('manual Chinese switch and reload stay explicit and preserve query/fragment');
  await page.goto(origin+'/en/',{waitUntil:'networkidle'});assert.equal(new URL(page.url()).pathname,'/en/');
  assert.equal(await page.evaluate(key=>window.localStorage.getItem(key),LANGUAGE_PREFERENCE_KEY),'zh');
  checks.push('explicit English URL overrides remembered Chinese without changing preference');
  const reopened=await browser.newContext({viewport,locale:'en-US',storageState:await context.storageState()});
  try {const next=await reopened.newPage();await next.goto(origin+'/',{waitUntil:'networkidle'});assert.equal(new URL(next.url()).pathname,'/');checks.push('reopened browser restores manual Chinese over English browser language');}finally{await reopened.close();}
  await page.goto(origin+documentPath+'?from=document#reader',{waitUntil:'networkidle'});
  assert.equal(new URL(page.url()).pathname,documentPath,'Explicit document language must override saved preference');
  await selectLanguage('中文');await page.waitForURL(origin+documentPath.replace(/^\/en\//u,'/zh/')+'?from=document#reader');
  await settleLanguage(page,languageCodes.zh!);
  checks.push('manual document switch retains verified counterpart identity, query and fragment');
  await page.goto(origin+'/en/',{waitUntil:'networkidle'});
  await selectLanguage('English');assert.equal(await page.evaluate(key=>window.localStorage.getItem(key),LANGUAGE_PREFERENCE_KEY),'en');
  await page.goto(origin+'/',{waitUntil:'networkidle'});await page.waitForURL(origin+'/en/');checks.push('manual English selection persists for next neutral entry');
 }finally{await context.close();}
 const blocked=await browser.newContext({viewport,locale:'en-US'});
 try {
  await blocked.addInitScript(()=>{Object.defineProperty(window,'localStorage',{configurable:true,get:()=>{throw new Error('Storage blocked for qualification');}});});
  const page=await blocked.newPage(),errors:string[]=[];page.on('pageerror',error=>errors.push(error.message));
  const trace=observeSiteRequests(page,{engine:evidence.engine,viewport:evidence.viewport},failedRequests,prefetchUrls);trace.setPhase('blocked-storage-entry');
  try {const waitForCurrentRequests=currentNetworkIdle(page);
  await page.goto(origin+'/',{waitUntil:'networkidle'});await page.waitForURL(origin+'/en/');
  await settleLanguage(page,languageCodes.en!);
  trace.setPhase('blocked-storage-select');await openLanguageSelector(page);
  await page.getByRole('button',{name:'中文',exact:true}).last().click();await page.waitForURL(origin+'/zh/');await settleLanguage(page,languageCodes.zh!);await waitForCurrentRequests();trace.setPhase('blocked-storage-reload');await page.reload({waitUntil:'networkidle'});
  for(const request of failedRequests)if(isCancelledSitePrefetch(request,prefetchUrls))ignoredPrefetchAborts.push(request.url);
  assert.equal(new URL(page.url()).pathname,'/zh/');assert.deepEqual(errors,[]);assert.deepEqual(failedRequests.filter(request=>!isCancelledSitePrefetch(request,prefetchUrls)),[]);checks.push('blocked storage permits fallback, manual Chinese and localized reload');
  }finally{trace.stop();}
 }finally{await blocked.close();}
}
export async function qualifySiteBrowser(options:SiteBrowserOptions){
 const metadata:unknown=createRequire(import.meta.url)('playwright/package.json');if(!object(metadata)||metadata.version!=='1.63.0')failure('SITE_BROWSER_RUNTIME','Qualification requires exact Playwright 1.63.0.');
 const exported=inspectSiteExport(options.root),languageCodes=emittedLanguageCodes(exported),report=prepareSiteBrowserReport(options.report,exported.root),results:BrowserEvidence[]=[];
 const languagePreferences:LanguagePreferenceEvidence[]=[];
 const receipt={schemaVersion:1,operation:'existing-export-browser-qualification',startedAt:new Date().toISOString(),source:exported.source,export:{root:exported.root,treeSha256:exported.treeSha256,files:exported.files.length,bytes:exported.bytes,unchangedAfterCheck:false},toolSha256:hash(readFileSync(fileURLToPath(import.meta.url))),routes:exported.routes,availability:exported.availability,playwrightVersion:'1.63.0',results,languagePreferences,status:'running',completedAt:'',failure:''};
 try {await withSiteExportServer(exported.root,async origin=>{
  for(const [name,engine] of [['chromium',chromium],['firefox',firefox],['webkit',webkit]] as const satisfies readonly (readonly [string,BrowserType])[]){const browser=await engine.launch({headless:true});
   try {for(const [viewport,size] of [['desktop',{width:1440,height:1000}],['mobile',{width:390,height:844}]] as const){const context=await browser.newContext({viewport:size,locale:'zh-CN'});
    try {for(const route of exported.routes){const page=await context.newPage();const evidence:BrowserEvidence={engine:name,engineVersion:browser.version(),viewport,route,assertions:[],errors:[],ignoredPrefetchAborts:[],requestFailures:[],prefetchUrls:[],screenshot:`${name}-${viewport}-${route.locale}-${route.kind}.png`};results.push(evidence);
     const consoleErrors:{text:string;url:string}[]=[],{requestFailures:failedRequests,prefetchUrls}=evidence;
     const trace=observeSiteRequests(page,{engine:name,viewport},failedRequests,prefetchUrls);
     page.on('pageerror',error=>evidence.errors.push('pageerror: '+error.message));page.on('console',event=>{if(event.type()==='error')consoleErrors.push({text:event.text(),url:event.location().url});});
     page.on('response',response=>{if(response.status()>=400)evidence.errors.push(`HTTP ${response.status()}: ${response.url()}`);});
     try {await checkPage(page,origin,route,viewport,evidence,exported);evidence.screenshots=await captureSiteEvidence(page,report,evidence.screenshot);if(route.kind==='home'){trace.setPhase('home-guide-navigation');const guide=gettingStartedGuide(route.locale==='default'?'zh':route.locale);await page.locator('.pcr-hero-actions a[href="'+guide.url+'"]').click();await page.locator('#getting-started-content').waitFor();assert.equal(new URL(page.url()).pathname,guide.url);evidence.assertions.push('home entry navigates to corresponding documentation language');}if(route.kind==='guide')await checkGuideCounterpart(page,origin,route,evidence,trace.setPhase);if(route.kind==='pcr'||route.kind==='guide'){trace.setPhase('search');await checkSearch(page,route,evidence);}trace.setPhase('request-error-check');for(const request of failedRequests){if(isCancelledSitePrefetch(request,prefetchUrls))evidence.ignoredPrefetchAborts.push(request.url);else evidence.errors.push(`requestfailed: ${request.reason}: ${request.method} ${request.url}`);}for(const error of consoleErrors){if(!(error.text.includes('net::ERR_ABORTED')&&evidence.ignoredPrefetchAborts.includes(error.url)))evidence.errors.push('console: '+error.text+' '+error.url);}assert.deepEqual(evidence.errors,[],'Browser reported errors');}
     catch(error){evidence.failure=message(error);try{writeFileSync(path.join(report,evidence.screenshot+'.html'),await page.content());}catch(diagnostic){evidence.diagnosticError=message(diagnostic);}}
     finally {try{if(!existsSync(path.join(report,evidence.screenshot)))evidence.screenshots=await captureSiteEvidence(page,report,evidence.screenshot);}catch(diagnostic){evidence.diagnosticError=message(diagnostic);if(!evidence.failure)throw diagnostic;}finally{trace.stop();await page.close();}}
    }}finally{await context.close();}
    const documentPath=exported.routes.find(route=>route.kind==='pcr'&&route.locale==='en')?.path;
    assert.ok(documentPath,'Language qualification requires an English PCR document');
    const evidence:LanguagePreferenceEvidence={engine:name,viewport,checks:[],ignoredPrefetchAborts:[],requestFailures:[],prefetchUrls:[]};languagePreferences.push(evidence);
    await checkLanguagePreferences(browser,origin,size,documentPath,languageCodes,evidence);
   }}finally{await browser.close();}
  }
 });const after=inspectSiteExport(exported.root);assert.equal(after.treeSha256,exported.treeSha256,'Export changed during browser qualification');receipt.export.unchangedAfterCheck=true;assert.ok(results.every(result=>!result.failure),`${results.filter(result=>result.failure).length} browser case(s) failed: ${results.find(result=>result.failure)?.failure}`);receipt.status='passed';return receipt;
 }catch(error){receipt.status='failed';receipt.failure=message(error);throw error;}finally{receipt.completedAt=new Date().toISOString();writeFileSync(path.join(report,'report.json'),JSON.stringify(receipt,null,2)+'\n');}
}
export async function siteBrowserMain(args:readonly string[]){const options=parseSiteBrowserArguments(args);if(options==='help'){process.stdout.write('Usage: node scripts/engineering/site-browser.ts --root <existing export> --report <new evidence directory>\n');return;}const receipt=await qualifySiteBrowser(options);process.stdout.write(JSON.stringify({status:receipt.status,sourceCommit:receipt.source.sourceCommit,report:path.join(options.report,'report.json'),cases:receipt.results.length})+'\n');}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))siteBrowserMain(process.argv.slice(2)).catch((error:unknown)=>{process.stderr.write(JSON.stringify({code:error instanceof SiteBrowserError?error.code:'SITE_BROWSER_FAILED',message:message(error)})+'\n');process.exitCode=1;});
