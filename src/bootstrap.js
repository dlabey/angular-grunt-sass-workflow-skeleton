angular.module('App', []);

angular.module('App').config(function($injector) {
    var CONFIG = $injector.get('CONFIG');
});

angular.module('App').run(function($injector) {
    var CONFIG = $injector.get('CONFIG');
});