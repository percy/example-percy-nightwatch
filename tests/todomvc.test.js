const httpServer = require('http-server')

const PORT = 8000
const TEST_URL = `http://localhost:${PORT}`
var server

module.exports = {
  before: function(browser) {
    // Start a local server to serve the TodoMVC app.
    server = httpServer.createServer()
    server.listen(PORT)
  },

  after: function(browser) {
    // Shutdown the http server.
    server.close()
    // Close down the browser session.
    browser.end()
  },

  afterEach: function(browser) {
    // Clear local storage between test cases.
    browser.execute('window.localStorage.clear()')
  },

  'Loads the app': function(browser) {
    browser
      .url(TEST_URL)
      .assert.visible('section.todoapp')
      .percySnapshot()
  },

  'Accepts a new todo': function(browser) {
    browser
      .url(TEST_URL)
      .sendKeys('.new-todo', 'New fancy todo')
      .sendKeys('.new-todo', browser.Keys.ENTER)
      .assert.containsText('.todo-list li:first-child label', 'New fancy todo')
      .percySnapshot(browser.currentTest.name, { widths: [768, 992, 1200] })
  },

  'Lets you check off a todo': function(browser) {
    browser
      .url(TEST_URL)
      .sendKeys('.new-todo', 'A thing to accomplish')
      .sendKeys('.new-todo', browser.Keys.ENTER)
      .assert.containsText('.todo-count', '1 item left')
      .click('input.toggle')
      .assert.containsText('.todo-count', '0 items left')
      .percySnapshot('Checked-off todo')
  },
}
