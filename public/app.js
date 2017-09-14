var App = angular.module('petrolApp',["ng-fusioncharts"]);
  
App.controller('exportCtrl', function ($scope, $http){
  $http({
    method: 'GET',
    url:'http://catalog.industrie.gov.tn/api/action/datastore_search?resource_id=5ad54062-e18e-4a54-965a-ec1642412efa&limit=12'
  }).success(function(data) {
    if (data.success){
      $scope.statItems = data.result.records;
    }  
  }).catch(function(response){
    console.log('response:',response);
  });
}); 

      

   App.controller('MyController', function ($scope) {
            $scope.dataSource = {
    chart: {
        caption: "Harry's SuperMart",
        subCaption: "Top 5 stores in last month by revenue",
        numberPrefix: "$",
        theme: "ocean"
    },
    data:[{
        label: "Bakersfield Central",
        value: "880000"
    },
    {
        label: "Garden Groove harbour",
        value: "730000"
    },
    {
        label: "Los Angeles Topanga",
        value: "590000"
    },
    {
        label: "Compton-Rancho Dom",
        value: "520000"
    },
    {
        label: "Daly City Serramonte",
        value: "330000"
    }]
};

$scope.changeBackgroundColor = function () {
    $scope.dataSource.chart.bgColor = "#efefef";
};

$scope.changeCaptionTextAlignment = function () {
    $scope.dataSource.chart.captionAlignment = "left";
};
            });
 