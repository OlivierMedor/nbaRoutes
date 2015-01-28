var app = angular.module('nbaRoutes');

app.service('teamService', function teamService($http, $q){
	 this.addNewGame = function(gameObject) {
		 url = "https://api.parse.com/1/classes/" + gameObj.homeTeam;
		if(parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)) {
			gameObj.won = true;
		}
		else {
			gameObj.win = false
		}
		$http({
			url: url,
			method: 'post',
			data: gameObj


		})

	}

	this.getTeamData = function(team) {
		var deferred = $q.defer();
		 url = 'https://api.parse.com/1/classes/'+team;
		$http({
			url: url,
			method: 'GET',
		}).then(function(data){
			results = data.data.results;
			var wins = 0;
			var losses = 0;
			for (var i = 0; i < results.length; i++) {
				if(results.won){
					wins = wins + 1;
				}
				else{
					losses = losses + 1;
				}
			};
			results.wins = wins;
			results.losses = losses;
			deferred.resolve(results)
		})




		return deferred.promise

	}

});

