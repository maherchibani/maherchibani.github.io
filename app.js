var  App= angular.module('weatherApp',[]);
App.controller('weatherCtrl', function ($scope, $http){

  $http({

    method: 'Get',
    url:'http://catalog.industrie.gov.tn/api/action/datastore_search?resource_id=5ad54062-e18e-4a54-965a-ec1642412efa&limit=10'
  }).success(function(data) {
    $scope.objects = data ;

  }).catch(function(response){
    console.log('response:',response);
  });
}
);

      

  

 