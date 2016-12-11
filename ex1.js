var minMax = function (A) {
    var min = A[0];
    var max = A[0];

    A.forEach(function (number) {
        if (number < min) min = number;
        if (number > max) max = number;
    });

    return { min, max };
};

var b = [10, 5, 7, 8, -2, -20, 6, 8];

console.log(minMax(b));
