// JavaScript source code
angular.module("app").service("user", userService);
function userService() {
    return singleton;

    function singleton() {
        var service = this;

        service.identify = identify;

        function identify(name) {
            return false;
        }
    }
}