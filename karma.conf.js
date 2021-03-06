// Karma configuration
// Generated on Tue Feb 13 2018 14:18:19 GMT+0530 (India Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
   
      'node_modules/jquery/dist/jquery.min.js',
      'www/lib/ionic/js/ionic.bundle.js',
      'www/lib/angular-mocks/angular-mocks.js', 

      "www/lib/ngCordova/dist/ng-cordova.js",
      "www/lib/ngCordova/dist/ng-cordova-mocks.js",
      
      'www/js/app.js',
      'www/js/addContact.js',
      'www/js/controllers.js',
      'www/js/services.js',

      'www/templates/*.html',
      
      'tests/**/*.js',

   ],  


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // preprocessors: {
    // },

    preprocessors: {
      'www/templates/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
        moduleName: 'templates',
        stripPrefix: 'www/'
    },
   


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // reporters: ['progress'],
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['PhantomJS'],
    browsers: ['Chrome'],

    customLaunchers: {
      Chrome_without_security: {
         base: 'Chrome',
         flags: ['--disable-web-security']
      }
    },

    plugins: [
      "karma-chrome-launcher",
      "karma-jasmine",
      "karma-mocha-reporter",
      "karma-ng-html2js-preprocessor"
    ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
