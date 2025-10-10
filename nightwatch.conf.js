const chromedriver = require('chromedriver');
const percy = require('@percy/nightwatch');

module.exports = {
  src_folders: ['tests'],
  output_folder: false,
  custom_commands_path: [percy.path],

  webdriver: {
    start_process: true,
    server_path: chromedriver.path
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome',
        alwaysMatch: {
          'goog:chromeOptions': {
            args: ['--headless=new', '--disable-gpu', '--no-sandbox']
          }
        }
      }
    }
  }
};
