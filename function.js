var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    $scope.maxPoint = 100;
    $scope.achievedPoint = 100;

    $scope.scoreValue = function() {
      var scoreValue = ($scope.achievedPoint / $scope.maxPoint) * 100;
      scoreValue = scoreValue.toFixed(2);
      return scoreValue + " %";
    };
});
