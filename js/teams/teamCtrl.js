var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){
	$scope.teamData;
	$scope.newGame = {};
	$scope.showNewGameForm = false;
	if($routeParams.team === 'utahjazz'){
		$scope.homeTeam = 'Utah Jazz';
		$scope.logoPath = 'images/jazz-logo.png';

	}
	if($routeParams.team === 'losangeleslakers') {
		$scope.homeTeam = 'Los Angeles Lakers';
		$scope.logoPath = 'images/lakers-logo.PNG';

	}
	if($routeParams.team === 'miamiheat'){
		$scope.homeTeam = 'Miami Heat';
		$scope.logoPath = 'images/heat-logo.PNG';
	}
	$scope.toggleNewGameForm = function(){
		$scope.showNewGameForm = !$scope.showNewGameForm;

	}
	submitGame = function(homeTeam){
		homeTeam = $scope.homeTeam.split(' ').join('').toLowerCase()
		teamService.addNewGame($scope.newGame).then(function(){
		teamService.getTeamData($scope.newGame.homeTeam).then(function(){
			teamService.getTeamData($scope.newGame.homeTeam).then(function(param1){
				$scope.teamData = param1;
				$scope.newGame = {};
				$scope.showNewGameForm = false;

			})
		})
		})
	}



	

});