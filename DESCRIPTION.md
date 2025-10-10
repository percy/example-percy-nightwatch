Changes performed

- Updated devDependencies in `package.json`:
  - @percy/cli -> 1.31.3
  - @percy/nightwatch -> 2.2.0
  - nightwatch -> 3.12.2
  - chromedriver -> 141.0.1 (added)
  - geckodriver -> 6.0.2
  - todomvc-app-css -> 2.4.3

- Switched Nightwatch default browser from Firefox to Chrome by editing `nightwatch.conf.js`:
  - Replaced geckodriver with chromedriver and set `goog:chromeOptions` headless args.

- Added a "Dependency versions" section to `README.md` listing updated versions.

- Verified Percy builds (web) after dependency updates. Percy build links (web):
  - Build 110: https://percy.io/9560f98d/web/test-pranav-8a4f5725/builds/43775747
  - Build 112: https://percy.io/9560f98d/web/test-pranav-8a4f5725/builds/43775795
  - Build 113: https://percy.io/9560f98d/web/test-pranav-8a4f5725/builds/43775808

Steps followed

1. Read `README.md` and `package.json` to find Percy instructions and current dependencies.
2. Created a branch `PER_5831`.
3. Installed project dependencies (`npm install`).
4. Ran initial Percy builds using `web-t; npm run test` and observed geckodriver/Firefox errors.
5. Updated `package.json` and bumped relevant devDependencies; added `chromedriver`.
6. Updated `nightwatch.conf.js` to use `chromedriver` and Chrome headless options.
7. Installed updated dependencies and retried Percy builds — builds completed successfully.
8. Updated `README.md` to list new versions.
9. Committed and pushed changes to branch `PER_5831`.

Notes

- The repository's `test` script uses `percy exec -- nightwatch` which requires a working WebDriver and browser. On the local machine I used the available system Chrome and installed a matching `chromedriver`.
- I left `geckodriver` as a devDependency in case Firefox is needed in the future; the tests now default to Chrome.
- Some Nightwatch assertions emitted deprecation warnings regarding `.containsText()` in favor of `assert.textContains()`; these are warnings only and tests passed.

What I couldn't/wasn't required to do

- I did not sign in to Percy; the `web-t` zsh function loaded the `PERCY_TOKEN` in my shell and Percy uploads succeeded.
- The repository didn't include explicit version numbers in `README.md` prior to these edits; I added a `Dependency versions` section as requested.

Please let me know if you'd like me to:
- Revert to Firefox-based tests and install a matching Firefox binary for geckodriver instead of using Chrome.
- Update Nightwatch tests to remove deprecated `.containsText()` calls.


