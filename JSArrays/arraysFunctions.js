var sortDescending = function (array) {
    array.sort(function (e1, e2) {
        return e2 - e1;
    });
};

var getFirstNElements = function (array, n) {
    return array.slice(0, n);
};

var getLastNElements = function (array, n) {
    return array.slice(array.length - n, array.length);
};

var sumEvens = function (array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            count += array[i];
        }
    }
    return count;
};

var getIntegerArray = function (fromNumber, toNumber) {
    var array = [];
    for (var i = fromNumber; i <= toNumber; i++) {
        array.push(i);
    }
    return array;
};

var getEvenSquares = function (array) {
    var squaresArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            squaresArray.push(array[i] * array[i]);
        }
    }
    return squaresArray;
};

