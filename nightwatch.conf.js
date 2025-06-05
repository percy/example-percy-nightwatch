const geckodriver = require('geckodriver');
const percy = require('@percy/nightwatch');

module.exports = {
  src_folders: ['tests'],
  output_folder: false,
  custom_commands_path: [percy.path],

  webdriver: {
    start_process: true,
    server_path: geckodriver.path
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'firefox',
        'moz:firefoxOptions': {
          args: ['-headless'],
          binary: process.env.FIREFOX_BINARY || '/Applications/Firefox.app/Contents/MacOS/firefox'
        }
      }
    }
  }
};
