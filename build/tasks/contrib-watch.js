module.exports = function(grunt) {
    grunt.config.set('watch', {
        livereload: {
            options: {
                livereload: true
            },
            files: ['src/**/*.{js,html,scss}']
        },
        jshintrc: {
            files: ['**/.jshintrc'],
            tasks: ['jshint']
        },
        scripts: {
            files: ['<%= jshint.scripts.src %>'],
            tasks: ['jshint:scripts', 'concat:dev', 'concat:public', 'uglify:dev']
        },
        styles: {
            files: ['src/styles/**/*.scss'],
            tasks: ['sass:dev']
        },
        tests: {
            files: ['test/**/*.js'],
            tasks: ['mocha']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};