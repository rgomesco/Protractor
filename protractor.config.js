const path = require('path');
const HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
  directConnect: true,
  framework: 'jasmine2',
  SELENIUM_PROMISE_MANAGER: false,
  specs: [path.resolve(process.cwd(), './specs/*.js')],

  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--disable-infobars',
        '--disable-extensions',
        '--disk-cache-size=0',
        '--media-cache-size=0',
        '--window-size=1920,1080',
        '--headless'
      ]
    }
  },

  onPrepare() {
    // set waitForAngularEnabled to false when testing non-angular site
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(10000);

    /* You can test websites in different languages by creating multiple data file
    All the data files should have the same label names
    You can set global variable to read data from specific language file*/
    global.language = 'english';
    global.label = require('./testdata/' + language);

    // Reports of test execution
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: 'reports/',
      takeScreenShotsOnlyForFailedSpecs: false,
      clientDefaults: {
        columnSettings: {
          displayTime: true,
          displayBrowser: true,
          displaySessionId: false,
          displayOS: true,
          inlineScreenshots: false
        },
        showTotalDurationIn: "header",
        totalDurationFormat: "hms"
      }
    }).getJasmine2Reporter());
  }
};
