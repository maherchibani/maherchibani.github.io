var App = angular.module('petrolApp',["ng-fusioncharts"]);
  
App.controller('exportCtrl', function ($scope, $http){
   $scope.dataSource = {};
    var init = function(){
        $http({
        method: 'GET',
        url:'http://catalog.industrie.gov.tn/api/action/datastore_search?resource_id=5ad54062-e18e-4a54-965a-ec1642412efa&limit=12'
        }).success(function(data) {
            if (data.success){
                $scope.statItems = data.result.records;
                $scope.dataSource = adaptData();

            }  
        }).catch(function(response){
            console.log('response:',response);            
        });
    }

    var adaptData = function(){
        var dataSource = {
                chart: {
                    caption: "Exportation mensuelle du pétrole brut en Tunisie ",
                    subCaption: "",
                    numberPrefix: "kt",
                    theme: "ocean"
                },
                 data :[]
             };

            for ( var i = 0; i < $scope.statItems.length ; i++) {
                dataSource.data.push({
                    label: $scope.statItems[i].Date,
                    value: ""+ $scope.statItems[i]['Exportation Pétrole brut en kt']
                });
        }
        return dataSource;
    }
    init();   
}); 
