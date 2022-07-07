// const TEST_URL = 'https://www.ecosia.org/search?q=2%2B2';

// module.exports = {
//   afterEach: function (browser) {
//     // Clear local storage between test cases.
//     browser.execute('window.localStorage.clear()');
//   },

//   'Computation Widget': function (browser) {
//     browser
//       .url(TEST_URL)
//       .assert.elementPresent('[data-test-id="computation"]')
//       .percySnapshot("Computation Widget", { 
//           widths: [768, 992, 1200],
//           percyCSS: ['article { visibility: hidden; }', '[data-test-id="web-related-queries"] { visibility: hidden; }']
//         })
//   }
// };