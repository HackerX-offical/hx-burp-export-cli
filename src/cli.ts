#!/usr/bin/env node
import { writeFileSync } from 'node:fs';
import { Command } from 'commander';
import { parseBurpXml, uniqueHosts } from './burp.js';
import { summarizeBurpItems } from './analysis/summarize-items.js';
import { toHostsJson } from './reporters/json.js';

const program = new Command();
program.name('hx-burp').description('Burp export → CLI host lists').version('1.0.0');

program
  .command('hosts')
  .argument('<burp.xml>', 'Burp export XML')
  .option('-o, --out <path>', 'write hosts file for hx-scope filter')
  .option('--json', 'JSON')
  .action((xml: string, opts: { out?: string; json?: boolean }) => {
    const items = parseBurpXml(xml);
    const hosts = uniqueHosts(items);
    const summary = summarizeBurpItems(items);
    if (opts.json) console.log(toHostsJson(hosts, items, summary));
    else hosts.forEach((h) => console.log(h));
    if (opts.out) writeFileSync(opts.out, hosts.join('\n') + '\n', 'utf8');
  });

program.parse();
