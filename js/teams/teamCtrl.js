var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){
	teamData = $scope.teamData;
	$scope.newGame = {};
	$scope.showNewGameForm = false;
	toggleNewGameForm = function() {
		if($scope.showNewGameForm === false) {
			return true;
		}
		else {
			return false;
		}

	}
	

});