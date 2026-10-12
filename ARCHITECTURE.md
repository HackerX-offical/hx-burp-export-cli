# hx-burp-export-cli architecture

Burp Suite XML export parser for host list extraction.

## Layout

```
src/
  cli.ts
  types.ts
  burp.ts                 # Re-exports
  parsers/                # XML → BurpItem[]
  analysis/               # uniqueHosts, summarize
  reporters/              # JSON / line output
  utils/safe-url.ts
tests/burp.test.ts
```

## Develop

```bash
npm install && npm run build && npm test
```
