// const TEST_URL = 'https://www.staging.ecosia.org/search?method=index&q=test&mocked=tripadvisorEntity';

// module.exports = {
//   afterEach: function (browser) {
//     // Clear local storage between test cases.
//     browser.execute('window.localStorage.clear()');
//   },

//   'Trip Advisor Widget': function (browser) {
//     browser
//       .url(TEST_URL)
//       .waitForElementVisible('[data-test-id="thumbnail-image"]')
//       .assert.elementPresent('[data-test-id="sidebar"]')
//       .percySnapshot("Trip Advisor Widget", { 
//           widths: [375, 768, 992, 1200, 1280],
//     })
//   }
// };