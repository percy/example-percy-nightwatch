const TEST_URL = 'https://www.ecosia.org/search?q=2%2B2&mocked=mapsSnippets';

module.exports = {
  afterEach: function (browser) {
    // Clear local storage between test cases.
    browser.execute('window.localStorage.clear()');
  },

  'Map Snippet': function (browser) {
    browser
      .url(TEST_URL)
      .assert.elementPresent('[data-test-id="mainline"]')
      .percySnapshot("Map Snippet", { 
          widths: [375, 768, 992, 1200, 1280],
    })
  }
};