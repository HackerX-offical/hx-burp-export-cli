import type { X2jOptions } from 'fast-xml-parser';

export function burpXmlParserOptions(): X2jOptions {
  return { ignoreAttributes: false, attributeNamePrefix: '@_' };
}
