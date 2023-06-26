---
id: extract
title: extract
hide_title: true
hide_table_of_contents: true
sidebar_label: extract
description: Extract kernelcache, dyld_shared_cache or DeviceTree from IPSW/OTA
---
## ipsw extract

Extract kernelcache, dyld_shared_cache or DeviceTree from IPSW/OTA

```
ipsw extract <IPSW/OTA | URL> [flags]
```

### Options

```
  -m, --dmg string              Extract DMG file (app, sys, fs)
      --driverkit               Extract DriverKit dyld_shared_cache
  -t, --dtree                   Extract DeviceTree
  -d, --dyld                    Extract dyld_shared_cache
  -a, --dyld-arch stringArray   dyld_shared_cache architecture to extract
  -f, --files                   Extract File System files
      --flat                    Do NOT perserve directory structure when extracting
  -h, --help                    help for extract
  -i, --iboot                   Extract iBoot
      --insecure                do not verify ssl certs
  -b, --kbag                    Extract Im4p Keybags
  -k, --kernel                  Extract kernelcache
  -o, --output string           Folder to extract files to
      --pattern string          Extract files that match regex
      --proxy string            HTTP/HTTPS proxy
  -r, --remote                  Extract from URL
  -s, --sep                     Extract sep-firmware
  -p, --sptm                    Extract SPTM and TXM Firmwares
```

### Options inherited from parent commands

```
      --color           colorize output
      --config string   config file (default is $HOME/.config/ipsw/config.yaml)
  -V, --verbose         verbose output
```

### SEE ALSO

* [ipsw](/docs/cli/ipsw)	 - Download and Parse IPSWs (and SO much more)

