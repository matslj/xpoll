'use strict';

// Ska kanske göras om till ett directive
angular.module('fuexitpollApp')
	.controller('schedulerCtrl', [ function() {
		var self = this;
		
		self.utskickTextSv = 'Hej! Här är texten som skickas ut.';
		self.utskickTextEn = 'Hello! This is the text that is sent';
		
		self.getContent = function() {
			console.log('Editor content - SV: ' + self.utskickTextSv);
			console.log('Editor content - EN: ' + self.utskickTextEn);
		};
	}]);