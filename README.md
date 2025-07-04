pulled from degentic.io:

```
wget --recursive --no-parent --no-clobber --convert-links --domains=degentic.io https://degentic.io/
```


Pulled from https://web.archive.org/web/20250615234245/https://predict.fishtank.live/

```
wget \
  --mirror \
  --convert-links \
  --adjust-extension \
  --page-requisites \
  --no-parent \
  --wait=1 \
  --limit-rate=500k \
  --domains web.archive.org \
https://web.archive.org/web/20250615234245/https://predict.fishtank.live/
```

Then js-beautify to clean up the chunks





