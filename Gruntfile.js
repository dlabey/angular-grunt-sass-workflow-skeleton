module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    grunt.loadTasks('build/tasks');

    grunt.registerTask('dev', [
        'connect',
        'jshint:scripts',
        'concat:dev',
        'concat:publicJS',
        'uglify:dev',
        'concat:styles',
        'sass:dev',
        'concat:publicCSS',
        'mocha',
        'watch'
    ]);
    grunt.registerTask('default', ['dev']);
    grunt.registerTask('test', 'mocha');
    grunt.registerTask('build', [
        'jshint:scripts',
        'concat:publicJS',
        'concat:prod',
        'uglify:prod',
        'concat:styles',
        'sass:prod',
        'concat:publicCSS'
    ]);
};  