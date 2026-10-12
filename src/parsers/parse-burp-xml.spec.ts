import { parseBurpXmlString } from './parse-burp-xml.js';

const sample = `<?xml version="1.0"?>
<items>
  <item><url>https://api.example.com/v1</url><method>GET</method></item>
</items>`;

describe('parseBurpXmlString', () => {
  it('parses items', () => {
    expect(parseBurpXmlString(sample)).toHaveLength(1);
  });
});
