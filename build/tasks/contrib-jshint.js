module.exports = function(grunt) {
    grunt.config.set('jshint', {
        options: {
            jshintrc: 'src/.jshintrc'
        },
        scripts: {
            src: ['src/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};