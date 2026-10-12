import { readFileSync } from 'node:fs';
import { XMLParser } from 'fast-xml-parser';

export interface BurpItem {
  url: string;
  host: string;
  method?: string;
  status?: number;
}

export function parseBurpXml(path: string): BurpItem[] {
  const xml = readFileSync(path, 'utf8');
  const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });
  const doc = parser.parse(xml);
  const items = doc?.items?.item ?? doc?.issue?.item ?? [];
  const list = Array.isArray(items) ? items : [items];
  const out: BurpItem[] = [];

  for (const it of list) {
    const url = it.url ?? it['@_url'] ?? it.request?.['@_url'];
    if (!url) continue;
    try {
      const u = new URL(String(url));
      out.push({
        url: u.toString(),
        host: u.hostname,
        method: it.method ?? it.request?.['@_method'],
        status: Number(it.status ?? it.response?.['@_status'] ?? 0) || undefined,
      });
    } catch {
      /* skip */
    }
  }
  return out;
}

export function uniqueHosts(items: BurpItem[]): string[] {
  return [...new Set(items.map((i) => i.host))].sort();
}
