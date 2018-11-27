const chromedriver = require('chromedriver')
const seleniumServer = require('selenium-server')

module.exports = {
  src_folders: ['tests'],
  output_folder: false,

  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: false,
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path,
    },
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        chromeOptions: {
          args: ['headless'],
        },
      },
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
      },
    },
  },
}
