# hx-burp-export-cli

Parse **Burp Suite sitemap XML** into scoped host lists and URL inventories for HackerX
CLI pipelines.

## Why this exists

Manual copy-paste from Burp wastes time and drops context. After an authorized web
assessment, you need deduplicated hosts and request metadata feeding `hx-scope-enforcer`
and downstream scanners. This tool ingests standard Burp XML exports without running
Burp headless.

## Features

- Parse Burp XML sitemap / target exports
- Emit unique hostnames for scope files
- JSON summary with item counts and metadata
- Write `-o` host list files for `hx-scope filter`

## Install

```bash
git clone https://github.com/HackerX-offical/hx-burp-export-cli.git
cd hx-burp-export-cli
npm install
npm run build
npm link   # optional: global hx-burp
```

## Quick start

```bash
hx-burp hosts burp-export.xml
hx-burp hosts sitemap.xml -o in-scope-hosts.txt --json
```

## Output

| Mode     | Description                                  |
| -------- | -------------------------------------------- |
| Default  | One hostname per line (stdout)               |
| `--json` | Hosts array, parsed items, and summary stats |
| `-o`     | Plain-text host list written to disk         |

## Develop

```bash
npm run format
npm run build
npm test
npm run format:check
```

## Architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md) for module layout and extension points.

## Ethics

Use only on systems and content you are **authorized** to test. See
[SECURITY.md](./SECURITY.md).

## License

Licensed under the [HackerX License](./LICENSE). Redistributions must retain copyright,
license text, and [NOTICE](./NOTICE) attribution per the license terms.
