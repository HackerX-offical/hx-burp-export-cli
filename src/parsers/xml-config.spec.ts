import { burpXmlParserOptions } from './xml-config.js';

describe('burpXmlParserOptions', () => {
  it('uses attribute prefix', () => {
    expect(burpXmlParserOptions().attributeNamePrefix).toBe('@_');
  });
});
