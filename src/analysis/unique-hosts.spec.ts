import { uniqueHosts } from './unique-hosts.js';

describe('uniqueHosts', () => {
  it('dedupes', () => {
    expect(uniqueHosts([{ url: 'u', host: 'a' }, { url: 'u2', host: 'a' }])).toEqual(['a']);
  });
});
