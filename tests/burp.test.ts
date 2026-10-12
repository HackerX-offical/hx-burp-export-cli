import { writeFileSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { parseBurpXml, uniqueHosts } from '../src/burp.js';

const sample = `<?xml version="1.0"?>
<items>
  <item><url>https://api.example.com/v1</url><method>GET</method></item>
  <item><url>https://www.example.com/</url></item>
</items>`;

describe('burp parser', () => {
  it('extracts hosts', () => {
    const p = join(tmpdir(), `burp-${Date.now()}.xml`);
    writeFileSync(p, sample);
    const items = parseBurpXml(p);
    expect(uniqueHosts(items)).toEqual(['api.example.com', 'www.example.com']);
    unlinkSync(p);
  });
});
