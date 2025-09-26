import manifest from '../../public/cdn/manifest.json';

const cdnMap = manifest as Record<string, string>;

export function cdn(url: string): string {
  return cdnMap[url] || url;
}
