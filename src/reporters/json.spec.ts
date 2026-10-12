import { toHostsJson } from './json.js';

describe('toHostsJson', () => {
  it('includes hosts', () => {
    const j = JSON.parse(toHostsJson(['a'], []));
    expect(j.hosts).toEqual(['a']);
  });
});
