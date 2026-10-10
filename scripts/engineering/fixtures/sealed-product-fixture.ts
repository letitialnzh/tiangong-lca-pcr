import { READER_CAPABILITIES } from "../../../builder/scripts/reader-compatibility.ts";
import { execFileSync } from 'node:child_process';
import { cpSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import type { TestContext } from 'node:test';
import { buildProductRelease } from '../../../builder/scripts/product-release.ts';
import { PRODUCT_MIRRORS, readProductIdentity } from '../../../builder/scripts/product-identity.ts';
import { buildOfflineTool } from '../../../builder/scripts/build-offline-packages.ts';
import { buildOfflineLibrary } from '../../../builder/scripts/build-offline-library.ts';
import { createReadSessionFixture } from '../../../packages/pcr-core/fixtures/read-session-fixture.ts';
import { resolveNpmCli } from '../sealed-artifact.ts';
import { parseNpmPackOutput } from '../../../builder/scripts/npm-release.ts';
import { field, text } from '../../../builder/scripts/release-types.ts';

function put(root: string, relative: string, content: string): void { const target = path.join(root, relative); mkdirSync(path.dirname(target), { recursive: true }); writeFileSync(target, content); }

export type GuidanceMutation = 'empty_context' | 'omit_unit' | 'alter_condition_rehash' | 'batch_only_omission';
export const OMITTED_ALLOCATION_CONDITION = ' when seed, screenings, and straw are all marketable products and price data are reliable';
/** An actual compiled bin delegates every command to the original tool, then
 * corrupts only successful guidance output. Packing still seals these real bytes;
 * transport checks alone cannot distinguish this broken candidate. */
function mutateInstalledGuidance(output: string, mutation: GuidanceMutation): void {
  const metadata: unknown = JSON.parse(readFileSync(path.join(output, 'package.json'), 'utf8'));
  const bin = path.join(output, text(field(metadata, 'bin', 'tiangong-pcr')));
  renameSync(bin, path.join(path.dirname(bin), 'real-bin.js'));
  writeFileSync(bin, `import {spawnSync} from 'node:child_process';
import {readFileSync,writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
const args=process.argv.slice(2);
const result=spawnSync(process.execPath,['--no-strip-types',fileURLToPath(new URL('./real-bin.js',import.meta.url)),...args],{stdio:'inherit'});
if(result.status===0&&args[0]==='guidance'){
 const index=args.indexOf('--output');
 if(index>=0){
  const filename=args[index+1],value=JSON.parse(readFileSync(filename,'utf8'));
  const mutate=guidance=>{
   const context=guidance.normative_context,mode=${JSON.stringify(mutation)};
   if(mode==='batch_only_omission'&&args[1]!=='batch')return;
   if(mode==='empty_context'){context.units=[];context.bindings=[];}
   else if(mode==='omit_unit'||mode==='batch_only_omission'){
    if(context.units.length<2)throw new Error('Partial omission requires multiple actual units.');
    const removed=context.units.pop();context.bindings=context.bindings.filter(binding=>binding.unit_id!==removed.unit_id);
   }else{
    const condition=${JSON.stringify(OMITTED_ALLOCATION_CONDITION)},unit=context.units.find(unit=>unit.family==='allocation'&&unit.markdown.includes(condition));
    if(!unit)throw new Error('Real allocation condition missing from controlled source.');
    unit.markdown=unit.markdown.replace(condition,'');
   }
   guidance.normative_context_provenance.context_sha256='sha256:'+createHash('sha256').update(JSON.stringify(context),'utf8').digest('hex');
  };
  if(args[1]==='batch')value.items.forEach(mutate);else mutate(value);
  writeFileSync(filename,JSON.stringify(value));
 }
}
process.exitCode=result.status??1;
`);
}

/** Tests build controlled seals; the production qualifier receives only existing artifacts. */
export async function sealedProductFixture(t: TestContext, usableTool: boolean, guidanceMutation?: GuidanceMutation) {
  const base = mkdtempSync(path.join(realpathSync(tmpdir()), 'sealed-consumer-contract-')); t.after(() => rmSync(base, { recursive: true, force: true }));
  const source = path.join(base, 'source'); mkdirSync(source);
  const npmCli = resolveNpmCli(); const npm = execFileSync(process.execPath, [npmCli, '--version'], { encoding: 'utf8' }).trim();
  const version = '0.4.1';
  put(source, 'product-release.json', JSON.stringify({ schema: 1, version, node: process.versions.node, npm, web: { origin: 'https://pcr.tiangong.earth', site: 'global' } }));
  for (const [file, name] of PRODUCT_MIRRORS) put(source, file, JSON.stringify({ name, version, private: true }));
  put(source, 'library/pcrs/fixture/pcr.en-US.md', 'Controlled transport identity fixture.\n');
  put(source, 'classifications/fixture.yaml', 'mappings: []\n');
  put(source, 'edgeone.json', '{"outputDirectory":"packages/pcr-docs/out","buildCommand":"fixture source build","headers":[],"redirects":[]}\n');
  const git = (...args: string[]) => execFileSync('git', args, { cwd: source, stdio: 'ignore' });
  git('init', '-q'); git('config', 'user.name', 'Sealed Test'); git('config', 'user.email', 'sealed@example.invalid'); git('add', '.'); git('commit', '-qm', 'controlled seal identity');
  const identity = readProductIdentity(source); const web = path.join(base, 'web');
  put(web, 'index.html', 'Controlled home.');
  put(web, 'zh/index.html', 'Controlled Chinese home.'); put(web, 'en/index.html', 'Controlled English home.');
  put(web, 'zh/docs/pcr/index.html', 'Controlled Chinese directory.'); put(web, 'en/docs/pcr/index.html', 'Controlled English directory.');
  put(web, 'generated/product-release.json', JSON.stringify(identity));
  put(web, 'generated/version.json', JSON.stringify({ sourceCommit: identity.sourceCommit, releaseVersion: identity.version, releaseTag: identity.tag, sourceFingerprint: identity.sourceFingerprint, counts: { pcrs: 1, pages: 2, languages: 2, sourceBytes: 20 } }));
  put(web, 'generated/raw/classifications/indexes/cpc-3.0-coverage.json', '{"fixture":true}\n');
  const librarySource = createReadSessionFixture(t).root;
  for (const file of ['README.md']) {
    mkdirSync(path.join(librarySource, 'packages/tiangong-pcr-library'), { recursive: true });
    cpSync(path.resolve('packages/tiangong-pcr-library', file), path.join(librarySource, 'packages/tiangong-pcr-library', file));
  }
  cpSync(path.resolve('LICENSE'), path.join(librarySource, 'LICENSE'));
  const root = path.join(base, 'sealed');
  const manifest = await buildProductRelease(source, identity.tag, root, { webDir: web, getNpmVersion: () => npm,
    pack: ({ stage, output, spec }) => parseNpmPackOutput(execFileSync(process.execPath, [npmCli, 'pack', stage, '--json', '--ignore-scripts', '--offline', '--pack-destination', output, '--cache', path.join(base, 'pack-cache')], { cwd: source, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 }), spec.name), builders: {
    tool({ output, version }) {
      if (usableTool) { const built = buildOfflineTool({ root: process.cwd(), output, version }); if (guidanceMutation) mutateInstalledGuidance(output, guidanceMutation); return built; }
      // Deliberately installable but not a usable consumer; it cannot pass the qualifier.
      mkdirSync(output, { recursive: true }); put(output, 'package.json', JSON.stringify({ name: '@tiangong-lca/pcr', version, files: ['README.md', 'reader-capabilities.json'], dependencies: { ajv: '8.0.0' }, bundleDependencies: ['ajv'] }));
      put(output, 'README.md', 'Controlled malformed-consumer fixture.\n');
      put(output, 'reader-capabilities.json', JSON.stringify(READER_CAPABILITIES));
      put(output, 'node_modules/ajv/package.json', '{"name":"ajv","version":"8.0.0","main":"index.js"}');
      put(output, 'node_modules/ajv/index.js', 'module.exports = {};\n');
    },
    library({ output, version, sourceCommit }) {
      const snapshot = buildOfflineLibrary({ root: librarySource, output, version, sourceCommit });
      put(output, 'package.json', JSON.stringify({ name: '@tiangong-lca/pcr-library', version, files: ['library.sqlite', 'library.sqlite.json', 'README.md'], license: 'MIT' }));
      put(output, 'README.md', 'One real PCR / real SQLite contract fixture.\n'); return snapshot;
    },
  } });
  return { base, root, identity, manifest, npmCli };
}
