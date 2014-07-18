var Visualizer = require('js-dependency-visualizer');
var path       = require('path');

module.exports = function(grunt) {

    grunt.registerMultiTask('dependency-visualizer', 'Generate Class dependency figure', function() {

        var options = this.options({
            files:     [],
            destPath: process.cwd() + '/visualize'
        });

        var srcFiles = [];
        options.files.forEach(function(file) {
            srcFiles = srcFiles.concat(grunt.file.expand({}, file));
        });

        if ( ! grunt.file.isDir(options.destPath) ) {
            grunt.file.mkdir(options.destPath);
        }

        options.destPath = options.destPath.replace(/\/$/, '') + '/';

        var analyzer = new Visualizer({
            files: srcFiles
        });

        grunt.file.write(options.destPath + 'dependencyData.js', analyzer.analyze().result());

        var assets = grunt.file.expand({}, path.resolve(__dirname, '../node_modules/js-dependency-visualizer/asset/') + '/*');
        assets.forEach(function(file) {
            grunt.file.copy(file, options.destPath + path.basename(file));
        });
    });
};
