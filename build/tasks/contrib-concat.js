module.exports = function(grunt) {
    grunt.config.set('concat', {
        dev: {
            src: [
                'build/parts/intro.js',
                'src/bootstrap.js',
                'src/constants/*.js',
                'src/constants/config/dev.js',
                'src/values/**/*.js',
                'src/models/**/*.js',
                'src/services/**/*.js',
                'src/controllers/**/*.js',
                'src/directives/**/*.js',
                'src/filters/**/*.js',
                'build/parts/outro.js'
            ],
            dest: 'build/dist/app.js'
        },
        styles: {
            src: ['src/styles/**/*.scss'],
            dest: 'build/tmp/styles.scss'
        },
        publicJS: {
            src: '<%= concat.dev.dest %>',
            dest: 'public/js/app.js'
        },
        publicCSS: {
            src: 'build/dist/styles.css',
            dest: 'public/styles.css'
        },
        prod: {
            src: [
                'build/parts/intro.js',
                'src/bootstrap.js',
                'src/constants/*.js',
                'src/constants/config/prod.js',
                'src/values/**/*.js',
                'src/models/**/*.js',
                'src/services/**/*.js',
                'src/controllers/**/*.js',
                'src/directives/**/*.js',
                'src/filters/**/*.js',
                'build/parts/outro.js'
            ],
            dest: 'build/dist/app.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
};