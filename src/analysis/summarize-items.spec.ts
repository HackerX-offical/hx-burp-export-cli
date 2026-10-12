import { summarizeBurpItems } from './summarize-items.js';

describe('summarizeBurpItems', () => {
  it('counts methods', () => {
    const s = summarizeBurpItems([{ url: 'u', host: 'h', method: 'get' }]);
    expect(s.methods.GET).toBe(1);
  });
});
