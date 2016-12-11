var minMax = function (A) {
    var min = A[0];
    var max = A[0];

    for  (var i = 1; i < A.length; i++) {

        if (A[i] < min) {
            min = A[i];
        }

        if (A[i] > max) {
            max = A[i];
        }

    }

    return {
        min: min,
        max: max
    };
    // return { min, max }; ES6
};

var b = [10, 5, 7, 8, -2, -20, 6, 8];

console.log(minMax(b));
