import { extractItemUrl } from './extract-url.js';

describe('extractItemUrl', () => {
  it('reads nested request url', () => {
    expect(extractItemUrl({ request: { '@_url': 'https://x' } })).toBe('https://x');
  });
});
