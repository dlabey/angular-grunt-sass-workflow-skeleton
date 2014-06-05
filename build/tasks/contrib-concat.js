module.exports = function(grunt) {
    grunt.config.set('concat', {
        dev: {
            src: [
                'src/bootstrap.js',
                'src/constants/*.js',
                'src/constants/config/dev.js',
                'src/models/**/*.js',
                'src/services/**/*.js',
                'src/controllers/**/*.js',
                'src/directives/**/*.js',
                'src/filters/**/*.js'
            ],
            dest: 'build/src/app.js'
        },
        public: {
            src: '<%= concat.dev.dest %>',
            dest: 'public/js/app.js'
        },
        prod: {
            src: ['<%= concat.dev.src %>'],
            dest: '<%= concat.dev.dest %>'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
};