import { parseYaml } from '../../pcr-core/src/yaml-lite.ts';
import { isUnknownRecord } from '../../pcr-core/src/types.ts';

export const INLINE_MANIFEST_LIMIT = 16384;
export const INLINE_MARKDOWN_LIMIT = 49152;
export const INLINE_DOWNLOAD_NAMES = ['manifest.yaml', 'pcr.en-US.md', 'pcr.zh-CN.md'] as const;
const prefix = 'data:application/octet-stream;base64,';
const currentArtifact = /^(library\/pcrs\/[^/.][^/]*\/[^/.][^/]*\/[^/.][^/]*\/)(?:manifest\.yaml|pcr\.(?:en-US|zh-CN)\.md)$/u;

/** Only these canonical current artifacts can use their same-directory manifest for eligibility. */
export function inlineDownloadManifestPath(sourcePath: string): string | undefined {
  const match = currentArtifact.exec(sourcePath);
  return match ? match[1] + 'manifest.yaml' : undefined;
}

/** Small unpublished metadata/required languages retain exact bytes as native downloads. */
export function inlineDownloadUrl(sourcePath: string, bytes: Uint8Array, hasReleaseHistory: boolean,
  siblingManifest?: {path: string; bytes: Uint8Array}, occupiedUrls?: ReadonlySet<string>): string | undefined {
  const manifestPath = inlineDownloadManifestPath(sourcePath);
  if (!manifestPath || bytes.length === 0 || bytes.length > (sourcePath === manifestPath ? INLINE_MANIFEST_LIMIT : INLINE_MARKDOWN_LIMIT) || hasReleaseHistory) return undefined;
  if (siblingManifest && siblingManifest.path !== manifestPath) return undefined;
  const manifestBytes = sourcePath === manifestPath ? bytes : siblingManifest?.bytes;
  if (!manifestBytes) return undefined;
  const manifest = parseYaml(new TextDecoder('utf-8', { fatal: true }).decode(manifestBytes));
  if (!isUnknownRecord(manifest) || manifest.status !== 'candidate' || manifest.content_maturity !== 'authored_methodology') return undefined;
  const url = prefix + Buffer.from(bytes).toString('base64');
  return occupiedUrls?.has(url) ? undefined : url;
}

/** Reject arbitrary data URLs, noncanonical base64 and oversized inline artifacts. */
export function decodeInlineDownloadUrl(url: string): Buffer | undefined {
  if (!url.startsWith('data:')) return undefined;
  if (!url.startsWith(prefix)) throw new Error('Invalid inline download MIME type');
  const encoded = url.slice(prefix.length);
  if (encoded.length === 0 || encoded.length > 4 * Math.ceil(INLINE_MARKDOWN_LIMIT / 3)
      || !/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/u.test(encoded))
    throw new Error('Invalid inline download base64');
  const bytes = Buffer.from(encoded, 'base64');
  if (bytes.length > INLINE_MARKDOWN_LIMIT || bytes.toString('base64') !== encoded)
    throw new Error('Invalid inline download size or encoding');
  return bytes;
}
