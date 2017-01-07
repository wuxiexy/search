var MetronicApp = angular.module('MetronicApp', []).controller('SearchController', function($rootScope, $scope, $http, $timeout) {

    $http.get("http://localhost/面试相关/search/public/public/json/searchCondition.json").then(function(rep){
        // 检索表单里面显示的每行检索条件
        $scope.condition = rep.data.searchCondition.condition;
        // console.log($scope.condition);
        // 可选的检索条件
        $scope.searchSelectTitle =  $scope.condition.slice(0, $scope.condition.length);
        // $scope.aa =  $scope.condition.slice(0, 1);
    });

});