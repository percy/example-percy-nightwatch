const TEST_URL = 'https://www.ecosia.org/search?q=2%2B2';

module.exports = {
  afterEach: function (browser) {
    // Clear local storage between test cases.
    browser.execute('window.localStorage.clear()');
  },

  'Computation Widget': function (browser) {
    browser
      .url(TEST_URL)
      .assert.elementPresent('[data-test-id="computation"]')
      .pause(10000)
      .percySnapshot("Computation Widget", { 
          widths: [375, 768, 992, 1200, 1280],
          percyCSS: 'article { visibility: hidden; } [data-test-id="web-related-queries"] { visibility: hidden; } [data-test-id="layout-footer"] { visibility: hidden; } .mainline__pagination { visibility: hidden; } [data-test-id="mainline-result-imagesSnippet"] { visibility: hidden; } [data-test-id="mainline-result-newsSnippet"] { visibility: hidden; } [data-test-id="mainline-result-videosSnippet"] { visibility: hidden; }'
        })
  }
};