module.exports = function(grunt) {
    grunt.config.set('uglify', {
        options: {
            wrap: true
        },
        dev: {
            options: {
                beautify: true,
                mangle: false,
                preserveComments: true
            },
            files: {
                'build/src/app.js': 'build/src/app.js',
                'public/js/app.js': 'build/src/app.js'
            }
        },
        prod: {
            options: {
                mangle: true,
                preserveComments: false
            },
            files: {
                'build/src/app.min.js': 'build/src/app.js',
                'public/js/app.min.js': 'build/src/app.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};