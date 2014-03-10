describe('Skip While Tests', function () {
    var linq = new Linq();

    it('Empty Sequence Is Returned When Source Is Empty', function () {
        var source = [];
        var result = linq.skipWhile(source, function (item) { return item >= 0 });
        expect(result).toEqual([]);
    });

    it('Empty Sequence Is Returned When Predicate Matches All Elements', function () {
        var source = [0, 1, 2];
        var result = linq.skipWhile(source, function (item) { return item >= 0 });
        expect(result).toEqual([]);
    });

    it('Elements Remaining In Sequence After Predicate Does Not Match Are Returned', function () {
        var source = [0, 1, 2];
        var result = linq.skipWhile(source, function (item) { return item == 0 });
        expect(result).toEqual([1, 2]);
    });
});