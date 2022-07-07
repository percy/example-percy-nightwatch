// const TEST_URL = 'https://info.ecosia.org/what';

// module.exports = {
//   afterEach: function (browser) {
//     // Clear local storage between test cases.
//     browser.execute('window.localStorage.clear()');
//   },

//   'How Ecosia Works': function (browser) {
//     browser
//       .url(TEST_URL)
//       .assert.elementPresent('[title="Ecosia Homepage"]')
//       .percySnapshot("How Ecosia Works", { 
//           widths: [375, 768, 992, 1200, 1280],
//           percyCSS: 'span[class="js-total-treecount total-counter-number"] { visibility: hidden; }'
//     })
//   }
// };