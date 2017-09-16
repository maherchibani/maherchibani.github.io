var App = angular.module('petrolApp',["ng-fusioncharts"]);
  
App.controller('exportCtrl', function ($scope, $http, $filter){
   $scope.dataSource = {};
   $scope.year ="2017";
   var init = function(){
        $http({
        method : 'POST',
        url : 'http://catalog.industrie.gov.tn/api/action/datastore_search',
        data : {
            resource_id:"5ad54062-e18e-4a54-965a-ec1642412efa",
            filters:{ "Year":$scope.year },
            limit:1000,
            offset:0
        },
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function(data) {
            if (data.success){
                $scope.statItems = data.result.records;
                $scope.dataSource = adaptData();
            }  
        }).catch(function(response){
            console.log('response:',response);            
        });
    }
    $scope.changeValue = function(){
        init();
    }
    
    var adaptData = function(){
        var dataSource = {
                chart: {
                    caption: "Monthly export of crude oil in Tunisia "+$scope.year,
                    subCaption: "",
                    numberPrefix: "kt",
                    theme: "ocean"
                },
                data :[]
             };
        for ( var i = 0; i < $scope.statItems.length ; i++) {
            dataSource.data.push({
                label: $scope.statItems[i].Date,
                value: ""+ $filter('number') ($scope.statItems[i]['Exportation Pétrole brut en kt'],2)
            });
        }
        return dataSource;
    }
    init();   
}); 
