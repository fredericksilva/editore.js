module.exports = function(karma) {
  var config = {
    basePath: '../',
    frameworks: ['jasmine-jquery', 'jasmine'],
    files: ['src/editore.js', 'test/editore.js'],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: karma.LOG_INFO,
    autoWatch: false,
    singleRun: true,
    browsers: ['Chrome'],
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    }
  };

  if (process.env.TRAVIS)
    config.browsers = ['Chrome_travis_ci'];

  karma.set(config);
};
