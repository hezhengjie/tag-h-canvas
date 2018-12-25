//  http://karma-runner.github.io/2.0/index.html
var webpackConfig = require('./build/webpack.base.conf.js')

module.exports = function(config) {
    config.set({
        //  https://github.com/jasmine/jasmine
        frameworks: ['jasmine'],

        files: [
            'test/**/*.spec.js'
        ],

        preprocessors: {
            '**/*.spec.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,

        reporters: ['spec', 'coverage'],

        coverageReporter: {
            dir: './coverage',
            reporters: [
                { type: 'lcov', subdir: '.' },
                { type: 'text-summary' }
            ]
        },

        browsers: ['Chrome'],
    })
}