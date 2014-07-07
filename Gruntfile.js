module.exports = function(grunt) {

    grunt.initConfig({
        'dependency-visualizer': {
            example: {
                options: {
                    srcPath: process.cwd() + '/example',
                    destPath: process.cwd() + '/visualize'
                }
            }
        }
    });

    grunt.loadTasks('tasks');

    grunt.registerTask('default', ['dependency-visualizer']);
};
