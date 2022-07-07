// const TEST_URL = 'http://ecosia.org';

// module.exports = {
//   afterEach: function (browser) {
//     // Clear local storage between test cases.
//     browser.execute('window.localStorage.clear()');
//   },

//   'Index page': function (browser) {
//     browser
//       .url(TEST_URL)
//       //.elementIdDisplayed('[data-test-id="claims-values-section-icon"]')
//       .assert.elementPresent('[data-test-id="index-header"]')
//       //.pause(20000)
//       .percySnapshot("Index page -> Header", { 
//           widths: [768, 992, 1200],
//           percyCSS: '[data-test-id="counter"] { visibility: hidden; }', })
//   }
// };