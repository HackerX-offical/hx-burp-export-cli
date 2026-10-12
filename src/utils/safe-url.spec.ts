import { hostFromUrl } from './safe-url.js';

describe('hostFromUrl', () => {
  it('parses hostname', () => {
    expect(hostFromUrl('https://a.example/x')).toBe('a.example');
  });
  it('returns null on garbage', () => {
    expect(hostFromUrl('not-url')).toBeNull();
  });
});
