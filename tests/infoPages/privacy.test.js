const TEST_URL = 'https://info.ecosia.org/privacy';

module.exports = {
  afterEach: function (browser) {
    // Clear local storage between test cases.
    browser.execute('window.localStorage.clear()');
  },

  'Privacy': function (browser) {
    browser
      .url(TEST_URL)
      .assert.elementPresent('[id="intro"]')
      .percySnapshot("Privacy", { 
          widths: [375, 768, 992, 1200, 1280]
    })
  }
};