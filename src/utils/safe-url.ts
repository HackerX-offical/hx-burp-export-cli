export function hostFromUrl(url: string): string | null {
  try {
    return new URL(String(url)).hostname;
  } catch {
    return null;
  }
}
