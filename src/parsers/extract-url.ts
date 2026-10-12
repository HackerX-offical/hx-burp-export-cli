export function extractItemUrl(it: Record<string, unknown>): string | undefined {
  const url =
    it.url ?? it['@_url'] ?? (it.request as Record<string, unknown> | undefined)?.['@_url'];
  return url ? String(url) : undefined;
}

export function extractItemMethod(it: Record<string, unknown>): string | undefined {
  const m = it.method ?? (it.request as Record<string, unknown> | undefined)?.['@_method'];
  return m ? String(m) : undefined;
}

export function extractItemStatus(it: Record<string, unknown>): number | undefined {
  const s = it.status ?? (it.response as Record<string, unknown> | undefined)?.['@_status'];
  const n = Number(s ?? 0);
  return n > 0 ? n : undefined;
}
