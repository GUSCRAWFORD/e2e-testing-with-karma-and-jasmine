angular.module("app").controller("main", main);
main.$inject = ['$scope', 'user'];
function main($scope, user) {
    $scope.users = [];

}