# 命运推算 · Destiny Calculator · Calculadora del Destino

A small, dependency‑free web toy that "calculates" a person's whole life story from a few birth details.
Pure HTML / CSS / JavaScript — no build step, no server, no tracking.

> ⚠️ **For entertainment only.** Every result is randomly generated from your input and is completely fictional. Do **not** use it for medical, legal, or real-life decisions.

## Features
- Inputs: **birth year / month / day**, optional **birth time** (with a *"Don't remember"* toggle), **birth place** (free text), and **gender**.
- Outputs a full "life report":
  - Expected lifespan & age of death
  - Youth / young adult / middle age / later‑years narratives
  - Marriage age, age of first child, number of children
  - **Luck windows** (when good fortune arrives)
  - **Crisis windows** with concrete **resolution advice**
- Deterministic: the same inputs always produce the same destiny (seeded PRNG), so results are stable and shareable.
- **Trilingual UI** — switch between **中文 / English / Español** any time, even after calculating.

## Run locally
Just open `index.html` in any browser. Or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## How it works
1. All inputs are hashed into a seed (`xmur3`) which drives a `mulberry32` PRNG.
2. The engine picks life numbers (lifespan, marriage age, children, luck/crisis ages) and template indices — language‑agnostic.
3. The UI renders those numbers into rich, localized narrative templates (中文 / English / Español).

No data leaves your browser.

## Project structure
```
index.html        # markup + form
css/style.css     # styling (responsive)
js/i18n.js        # zh / en / es strings + content pools
js/engine.js      # deterministic destiny generator
js/app.js         # form handling, rendering, live language switch
```

## Deploy (GitHub Pages)
Push the files to a repo and enable Pages on the `main` branch, root path. The live site is then served at `https://<user>.github.io/<repo>/`.

---
Made for fun. 命运由心造。
