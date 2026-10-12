import type { BurpItem } from '../types.js';

export function uniqueHosts(items: BurpItem[]): string[] {
  return [...new Set(items.map((i) => i.host))].sort();
}
