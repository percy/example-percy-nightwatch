// PER-8195 Phase 3 — nightwatch advanced example.
// Each named test exercises one row of the Advanced Feature Matrix. See
// ../matrix.yml for the canonical mapping.

const httpServer = require('http-server')

const PORT = process.env.PORT_NUMBER || 8009
const TEST_URL = `http://localhost:${PORT}`
let server

module.exports = {
  before: function () {
    server = httpServer.createServer({ root: `${__dirname}/../..` })
    server.listen(PORT)
  },

  after: function (browser) {
    server.close()
    browser.end()
  },

  beforeEach: function (browser) {
    browser
      .url(TEST_URL)
      .sendKeys('.new-todo', 'Walk the dog')
      .sendKeys('.new-todo', browser.Keys.ENTER)
  },

  'exercises widths': function (browser) {
    browser.percySnapshot('TodoMVC Advanced > exercises widths', {
      widths: [375, 768, 1280, 1920],
    })
  },

  'exercises percyCSS': function (browser) {
    browser.percySnapshot('TodoMVC Advanced > exercises percyCSS', {
      percyCSS: '.todo-list li { background: #fffde7 !important; }',
    })
  },

  'exercises minHeight': function (browser) {
    browser.percySnapshot('TodoMVC Advanced > exercises minHeight', {
      minHeight: 2000,
    })
  },

  'exercises enableJavaScript': function (browser) {
    browser.percySnapshot('TodoMVC Advanced > exercises enableJavaScript', {
      enableJavaScript: true,
    })
  },

  'exercises responsiveSnapshotCapture': function (browser) {
    browser.percySnapshot('TodoMVC Advanced > exercises responsiveSnapshotCapture', {
      responsiveSnapshotCapture: true,
      widths: [375, 1280],
    })
  },

  'exercises labels': function (browser) {
    browser.percySnapshot('TodoMVC Advanced > exercises labels', {
      labels: 'smoke,nightwatch',
    })
  },

  'exercises testCase': function (browser) {
    browser.percySnapshot('TodoMVC Advanced > exercises testCase', {
      testCase: 'todomvc-advanced-suite',
    })
  },

  'exercises devicePixelRatio': function (browser) {
    browser.percySnapshot('TodoMVC Advanced > exercises devicePixelRatio', {
      devicePixelRatio: 2,
    })
  },

  'exercises browsers override': function (browser) {
    browser.percySnapshot('TodoMVC Advanced > exercises browsers override', {
      browsers: ['chrome', 'firefox'],
    })
  },

  'exercises readiness preset': function (browser) {
    browser.percySnapshot('TodoMVC Advanced > exercises readiness preset', {
      readiness: { preset: 'strict', timeoutMs: 5000 },
    })
  },
}
