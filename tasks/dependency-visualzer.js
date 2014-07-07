var Visualizer = require('js-dependency-visualizer');

module.exports = function(grunt) {

    grunt.registerMultiTask('dependency-visualizer', 'Generate Class dependency figure', function() {

        var options = this.options({
            srcPath: process.cwd(),
            destPath : process.cwd() + '/visualize'
        });

        var analyzer = new Visualizer(options);

        analyzer.analyze();
    });
};
