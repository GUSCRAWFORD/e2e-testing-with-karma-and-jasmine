describe("user", function () {
    it(".identify returns false with no data passed to it", function () {
        expect(user.identify()).toEqual(false);
    })
});