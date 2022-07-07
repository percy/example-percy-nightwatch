const TEST_URL = 'https://info.ecosia.org/mobile';

module.exports = {
  afterEach: function (browser) {
    // Clear local storage between test cases.
    browser.execute('window.localStorage.clear()');
  },

  'Mobile': function (browser) {
    browser
      .url(TEST_URL)
      .assert.elementPresent('[id="footer"]')
      .percySnapshot("Mobile", { 
          widths: [375, 768, 992, 1200, 1280]
    })
  }
};