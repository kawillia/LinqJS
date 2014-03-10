function Linq() {
    this.all = function (source, predicate) {
        for (var i = 0; i < source.length; i++)
            if (!predicate(source[i]))
                return false;

        return true;
    };

    this.skipWhile = function (source, predicate) {
        var result = [];
        var skip = true;

        for (var i = 0; i < source.length; i++) {
            if (skip && predicate(source[i]))
                continue;

            skip = false;
            result.push(source[i]);
        }

        return result;
    };
}