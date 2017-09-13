var App = angular.module('petrolApp',[]);
App.controller('exportCtrl', function ($scope, $http){
  $http({
    method: 'GET',
    url:'http://catalog.industrie.gov.tn/api/action/datastore_search?resource_id=5ad54062-e18e-4a54-965a-ec1642412efa&limit=10'
  }).success(function(data) {
    if (data.success){
      $scope.statItems = data.result.records;
    }  
  }).catch(function(response){
    console.log('response:',response);
  });
}); 

      

  

 