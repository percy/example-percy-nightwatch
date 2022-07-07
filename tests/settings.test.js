const TEST_URL = 'https://www.ecosia.org/settings';

module.exports = {
  afterEach: function (browser) {
    // Clear local storage between test cases.
    browser.execute('window.localStorage.clear()');
  },

  'Settings Page': function (browser) {
    browser
      .url(TEST_URL)
      .waitForElementVisible('.notifications')
      .assert.elementPresent('[data-test-id="cancel"]')
      .percySnapshot("Settings Page", { 
          widths: [375, 768, 992, 1200, 1280],
        })
  }
};