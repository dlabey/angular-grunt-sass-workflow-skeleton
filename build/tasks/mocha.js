module.exports = function(grunt) {
    grunt.config.set('mocha', {
        test: {
            src: ['test/unit/runner.html'],
            options: {
                run: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-mocha');
};