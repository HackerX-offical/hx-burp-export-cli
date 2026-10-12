import type { BurpExportSummary, BurpItem } from '../types.js';

export function toHostsJson(hosts: string[], items: BurpItem[], summary?: BurpExportSummary): string {
  return JSON.stringify({ hosts, count: items.length, summary }, null, 2);
}
