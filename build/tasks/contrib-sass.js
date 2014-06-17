module.exports = function(grunt) {
    grunt.config.set('sass', {
        options: {
            loadPath: 'src/styles'
        },
        dev: {
            files: {
                'build/dist/styles.css': 'build/tmp/styles.scss'
            }
        },
        prod: {
            files: {
                'build/dist/styles.css': 'build/tmp/styles.scss'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
};