angular.module("ctrls",["service"])
.controller("index",["$scope","$http","indexdata",function ($scope,$http) {
    indexdata.then(function (data) {
        $scope.data=data.data;
    })
}])