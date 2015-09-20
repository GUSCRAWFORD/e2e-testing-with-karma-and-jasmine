describe("user", function () {
    beforeEach(module("app"));
 
    it(".identify returns false with no data passed to it", inject(function (user) {
        expect(user.identify()).toEqual(false);
    }))
});