"use strict";
var sortDescending = function (array) {
    array.sort(function (e1, e2) {
        return e2 - e1;
    });
};

var getFirstNElements = function (array, n) {
    return array.slice(0, n);
};

var getLastNElements = function (array, n) {
    return array.slice(array.length - n);
};

var sumEvens = function (array) {
    return array.filter(function (value) {
        return value % 2 === 0;
    })
        .reduce(function (sum, currentElement) {
            return sum + currentElement;
        });
};

var getIntegerArray = function (fromNumber, toNumber) {
    var array = [];
    for (var i = fromNumber; i <= toNumber; i++) {
        array.push(i);
    }
    return array;
};

var getEvenSquares = function (array) {
    return array.filter(function (value) {
        return value % 2 === 0;
    })
        .map(function (value) {
            return value * value;
        });
};

