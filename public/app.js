var app = angular.module("golfApp",["ngRoute"]);

app.controller("homeCtrl", function($scope, $http){
  $scope.courseName = "";
  $scope.teeColor = "";
  $scope.score = "";
  $scope.points = "";
});

app.directive("test", function(){
  return {
    template: "<p>{{ courseName }} {{ teeColor }} {{ score }} {{ points }}</p>"
  };
});

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/app/views/inputs.html"
    })
    .when("/test", {
      templateUrl : "/app/views/test.html"
    })
    .when("/leaderboard",{
      templateUrl: "/app/views/leaderboard.html"
    });
});
