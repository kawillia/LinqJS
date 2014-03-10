describe('All Tests', function () {
    var linq = new Linq();

    it('All Returns True When Source Is Empty', function () {
        var source = [];
        var result = linq.all(source, function (item) { return item == 0 });
        expect(result).toEqual(true);
    });

    it('All Returns True When Every Element Matches The Predicate', function () {
        var source = [0, 1, 2];
        var result = linq.all(source, function (item) { return item >= 0 });
        expect(result).toEqual(true);
    });

    it('All Returns False When Every Element Does Not Match The Predicate', function () {
        var source = [0, 1, 2];
        var result = linq.all(source, function (item) { return item > 0 });
        expect(result).toEqual(false);
    });
});