'use strict';

// Ska kanske göras om till ett directive
angular.module('fuexitpollApp')
	.controller('navCtrl', ['$location', function($location) {
		var self = this;
		console.log("created");
		self.isActive =  function (path) { 
			if ($location.path().substr(0, path.length) == path) { 
				if (path === "/" && $location.path() === "/") { 
					return true; 
				} else if (path === "/") {
					return false;
				} 
				return true;
			} else { 
				return false;
			} 
		}; 
	}]);