import { readFileSync } from 'node:fs';

export function readTextFile(path: string): string {
  return readFileSync(path, 'utf8');
}
