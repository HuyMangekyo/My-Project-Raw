var matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]];
function sumPrice(array) {
    var sum = 0;
    array.forEach(function (val, i) {
        val.forEach(function (price, j) {
            if (i == 0) {
                if (price != 0) {
                    sum += price;
                }
            }
            else if ((price != 0) && array[i - 1][j] != 0) {
                sum += price;
            }
        });
    });
    return sum;
}
console.log(sumPrice(matrix));
