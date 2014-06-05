module.exports = function(grunt) {
    grunt.config.set('sass', {
        options: {
            loadPath: 'src/styles'
        },
        dev: {
            files: {
                'build/src/styles.css': 'src/styles/**/*.scss',
                'public/styles.css': 'src/styles/**/*.scss'
            }
        },
        prod: {
            files: {
                'build/src/styles.css': 'src/styles/**/*.scss',
                'public/styles.css': 'src/styles/**/*.scss'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
};