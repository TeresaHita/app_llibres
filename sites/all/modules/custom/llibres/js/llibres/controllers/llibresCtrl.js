llibres.controller('llibresController', function ($scope, $http) {
  $http.get('/json/llibres').success(function (result) {
    $scope.llibres = (function() {
      return result.nodes;
    })();
  });
});
