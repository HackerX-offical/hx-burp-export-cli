import type { BurpExportSummary, BurpItem } from '../types.js';
import { uniqueHosts } from './unique-hosts.js';

export function summarizeBurpItems(items: BurpItem[]): BurpExportSummary {
  const methods: Record<string, number> = {};
  for (const it of items) {
    const m = (it.method ?? 'UNKNOWN').toUpperCase();
    methods[m] = (methods[m] ?? 0) + 1;
  }
  return { itemCount: items.length, hostCount: uniqueHosts(items).length, methods };
}
