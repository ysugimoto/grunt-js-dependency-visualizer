module.exports = function(grunt) {

    grunt.initConfig({
        'dependency-visualizer': {
            example: {
                options: {
                    files: ['example/*.js'],
                    destPath: process.cwd() + '/visualize'
                }
            }
        }
    });

    grunt.loadTasks('tasks');

    grunt.registerTask('default', ['dependency-visualizer']);
};
