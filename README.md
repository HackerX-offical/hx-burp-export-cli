# hx-burp-export-cli

Bridge **Burp GUI exports** into your terminal pipeline: unique hosts for `hx-scope filter` and URL inventories for `hx-alive` / `hx-http`.

```bash
hx-burp hosts burp-export.xml -o hosts.txt
hx-scope filter -f scope.txt -i hosts.txt -o in-scope.txt
```

MIT — HackerX Official
