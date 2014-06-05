module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    grunt.loadTasks('build/tasks');

    grunt.registerTask('dev', [
        'connect',
        'jshint:scripts',
        'mocha',
        'concat:dev',
        'concat:public',
        'uglify:dev',
        'sass:dev',
        'watch'
    ]);
    grunt.registerTask('default', ['dev']);
    grunt.registerTask('test', 'mocha');
    grunt.registerTask('build', [
        'jshint:scripts',
        'concat:prod',
        'uglify:prod',
        'sass:prod'
    ]);
};  