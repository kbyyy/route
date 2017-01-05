angular.module("myapp",["ngRoute","ngAnimate"])
.config(function ($routeProvider) {
    $routeProvider.when("/",{
        templateUrl:"index.html"
    }).when("/list/:id",{
        templateUrl:"list.html",
        controller:"list"

    }).when("/phone",{
            templateUrl:"phone.html"
        })
        .otherwise("/")
    
})
    .controller("list",function ($scope,$routeParams) {
    $scope.id=$routeParams.id
})