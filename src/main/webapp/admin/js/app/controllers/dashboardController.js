'use strict';

// Ska kanske göras om till ett directive
angular.module('fuexitpollApp')
	.controller('dashboardCtrl', function($scope) {

		$scope.labels = ['Inst1', 'Inst2', 'Inst3', 'Inst4', 'Inst5', 'Inst6', 'Inst7'];
		$scope.series = ['Obesvarade', 'Besvarade'];

		$scope.data = [
		    [65, 59, 80, 81, 56, 55, 40],
		    [28, 48, 40, 19, 86, 27, 90]
		];
		
		$scope.options = {
//			responsive: true,
//		    barValueSpacing: 10,
			maintainAspectRatio: false
		};
	});