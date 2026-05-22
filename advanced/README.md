# Advanced Percy + Nightwatch example

Exercises the full applicable Percy SDK feature surface for `@percy/nightwatch`.

10 named tests in `tests/todomvc_advanced.test.js`, one per matrix row: widths, percyCSS, minHeight, enableJavaScript, responsiveSnapshotCapture, labels, testCase, devicePixelRatio, browsers override, readiness preset.

Source of truth: [`matrix.yml`](./matrix.yml).

## Run locally

```bash
cd advanced
npm install
export PERCY_TOKEN="<your project token>"
npm run test:advanced
```

CI assertion mode (no real token):

```bash
npm run test:advanced:ci
```
