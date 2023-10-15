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
        alwaysMatch: {
          'moz:firefoxOptions': {
            args: []
          }
        }
      }
    }
  }
};
