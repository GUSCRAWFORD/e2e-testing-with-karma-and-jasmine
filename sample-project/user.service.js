// JavaScript source code

function userService() {
    return singleton;

    function singleton() {
        var service = this;

        service.identify = identify;

        function identify() {

        }
    }
}