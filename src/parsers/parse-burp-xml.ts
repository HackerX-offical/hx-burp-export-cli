import { readFileSync } from 'node:fs';
import { XMLParser } from 'fast-xml-parser';
import type { BurpItem } from '../types.js';
import { extractItemMethod, extractItemStatus, extractItemUrl } from './extract-url.js';
import { hostFromUrl } from '../utils/safe-url.js';

export function parseBurpXmlString(xml: string): BurpItem[] {
  const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });
  const doc = parser.parse(xml);
  const items = doc?.items?.item ?? doc?.issue?.item ?? [];
  const list = Array.isArray(items) ? items : [items];
  const out: BurpItem[] = [];

  for (const it of list) {
    const row = it as Record<string, unknown>;
    const url = extractItemUrl(row);
    if (!url) continue;
    const host = hostFromUrl(url);
    if (!host) continue;
    out.push({
      url: new URL(url).toString(),
      host,
      method: extractItemMethod(row),
      status: extractItemStatus(row),
    });
  }
  return out;
}

export function parseBurpXml(path: string): BurpItem[] {
  return parseBurpXmlString(readFileSync(path, 'utf8'));
}
