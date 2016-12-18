'use strict';

angular.module('fuexitpollApp', [ 'ngRoute', 'ui.bootstrap', 'chart.js' ]) // , 'ui.tinymce'
    // Stäng av caching för get requests globalt
    .config(['$httpProvider', '$routeProvider', function($httpProvider, $routeProvider) {
    	//initialize get if not there
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};    
        }  
        //disable IE ajax request caching
        $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
        // extra
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
        
        // Route management
        $routeProvider.when('/', {
            templateUrl: 'js/app/views/dashboard.html'
          })
//          .when('/anvandare', {
//            templateUrl: 'views/anvandareView.html'
//          })
//          .when('/detaljer/:jobbId', {
//            templateUrl: 'views/jobbdetaljerView.html'
//          });
            .when('/respondenter', {
		      templateUrl: 'js/app/views/respondenter.html'
		    })
		    .when('/kodschema', {
		      templateUrl: 'js/app/views/kodschema.html'
		    })
		    .when('/utskickshantering', {
		      templateUrl: 'js/app/views/scheduler.html'
		    });
          $routeProvider.otherwise({
            redirectTo: '/'
          });
    }])
    .filter('jaNej', [function() {
	    return function(input) {
	        return input ? 'Ja' : 'Nej';
	    }
	}]);