const chromedriver = require('chromedriver')
const seleniumServer = require('selenium-server')
const percy = require('@percy/nightwatch')

module.exports = {
  src_folders: ['tests'],
  output_folder: false,
  custom_commands_path: [ percy.path ],

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
          w3c: false
        },
      },
    },

    Chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
      },
    },
  },
}
