import {spawnSync} from "node:child_process";
import {readFileSync,lstatSync,mkdirSync,mkdtempSync,realpathSync,rmSync,writeFileSync} from "node:fs";
import {tmpdir} from "node:os";
import path from "node:path";
import {fileURLToPath,pathToFileURL} from "node:url";
import {unknownField} from "../../pcr-core/src/types.ts";
const repositoryRoot=path.resolve(fileURLToPath(new URL("../../..",import.meta.url)));
/** Emit browser code from owned TypeScript; source files are never browser assets. */
export function compileDocsBrowserAssets({root=repositoryRoot,outputRoot}:{root?:string;outputRoot:string}) {
 const compiler=path.join(root,"node_modules/typescript/bin/tsc");
 const compilerPackage=path.join(root,"node_modules/typescript/package.json");
 let installed:unknown;
 try {installed=JSON.parse(readFileSync(compilerPackage,"utf8"));if(!lstatSync(compiler).isFile())throw new Error("compiler is not a regular file");}
 catch(error){throw Object.assign(new Error("The pinned TypeScript compiler is required to generate browser assets.",{cause:error}),{code:"BROWSER_COMPILER_UNAVAILABLE"});}
 const manifest:unknown=JSON.parse(readFileSync(path.join(root,"package.json"),"utf8"));
 const expected=unknownField(unknownField(manifest,"devDependencies"),"typescript");
 if(typeof expected!=="string"||unknownField(installed,"version")!==expected)throw Object.assign(new Error("The browser compiler does not match the repository's pinned TypeScript version."),{code:"BROWSER_COMPILER_UNAVAILABLE"});
 const temporary=mkdtempSync(path.join(realpathSync(tmpdir()),"pcr-browser-assets-"));
 try {
  const compiled=spawnSync(process.execPath,[compiler,"-p",path.join(root,"tsconfig.docs-worker.json"),"--outDir",temporary],{cwd:root,encoding:"utf8",maxBuffer:8*1024*1024});
  if(compiled.error||compiled.status!==0)throw new Error("Browser TypeScript compilation failed: "+(compiled.error?.message??compiled.stdout+compiled.stderr));
  const outputs=new Map<string,Buffer>();
  for(const name of ["search-worker.js", "search-terms.js"]){const source=path.join(temporary,name);const stat=lstatSync(source);if(!stat.isFile()||stat.isSymbolicLink())throw new Error("Compiled browser asset is not a regular file: "+name);outputs.set(name,readFileSync(source));}
  mkdirSync(outputRoot,{recursive:true});
  const worker=outputs.get("search-worker.js");const terms=outputs.get("search-terms.js");if(!worker||!terms)throw new Error("Required browser outputs are missing");
  const workerText=worker.toString("utf8").replaceAll('"./search-terms.js"','"./search-terms.mjs"');
  writeFileSync(path.join(outputRoot,"search-worker.mjs"),workerText);writeFileSync(path.join(outputRoot,"search-terms.mjs"),terms);
  return {compilerVersion:expected,files:["search-worker.mjs","search-terms.mjs"]};
 }finally{rmSync(temporary,{recursive:true,force:true});}
}

/** Read-only check used when a generated worker is deliberately present in source discovery. */
export function checkDocsBrowserAssets({root=repositoryRoot}:{root?:string}={}) {
 const temporary=mkdtempSync(path.join(realpathSync(tmpdir()),"pcr-browser-check-"));
 try {
  compileDocsBrowserAssets({root,outputRoot:temporary});
  const output=path.join(root,"packages/pcr-docs/public/generated/search-worker.mjs");
  const stat=lstatSync(output);
  if(!stat.isFile()||stat.isSymbolicLink()||realpathSync(output)!==path.resolve(output))throw new Error("Generated search worker must be a regular file.");
  if(!readFileSync(output).equals(readFileSync(path.join(temporary,"search-worker.mjs"))))throw new Error("Generated search worker differs from pinned TypeScript compilation.");
 }finally{rmSync(temporary,{recursive:true,force:true});}
}
if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href){
 if(process.argv.length!==3||process.argv[2]!=="--check")throw new Error("Usage: node browser-assets.ts --check");
 checkDocsBrowserAssets();
}
