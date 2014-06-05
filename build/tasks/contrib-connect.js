module.exports = function(grunt) {
    grunt.config.set('connect', {
        server: {
            options: {
                base: 'public',
                hostname: '*'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
};