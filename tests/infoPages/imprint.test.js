const TEST_URL = 'https://info.ecosia.org/imprint';

module.exports = {
  afterEach: function (browser) {
    // Clear local storage between test cases.
    browser.execute('window.localStorage.clear()');
  },

  'Imprint': function (browser) {
    browser
      .url(TEST_URL)
      .assert.elementPresent('[id="imprint-section"]')
      .percySnapshot("Imprint", { 
          widths: [375, 768, 992, 1200, 1280]
    })
  }
};