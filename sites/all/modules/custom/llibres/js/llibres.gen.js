var llibres = angular.module('llibres', []);

jQuery(document).ready(function() {
  angular.bootstrap(document.getElementById('llibres-app'),['llibres']);
});

llibres.controller('llibresController', function ($scope, $http) {
  $http.get('/json/llibres').success(function (result) {
    $scope.llibres = (function() {
      return result.nodes;
    })();
  });
});
