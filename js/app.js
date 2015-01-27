var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
  .when('/', {
  	templateUrl: 'js/home/homeTmpl.html',
  	controller: 'homeCtrl',
  	resolve: function() {
  		var teamData = function() {
  			return teamService.getTeamData($route.current.params.team); 
  	}
  })
  .when('/teams/:team', {
  	templateUrl: 'js/teams/teamTmpl.html', 
  	controller: 'teamCtrl'
})
  .otherwise({
      redirectTo: '/'
    })
});