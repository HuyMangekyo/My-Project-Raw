function fibonacci(n) {
    if ((n === 0) || n === 1) {
        return n;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
var sum = 0;
for (var i = 0; i <= 10; i++) {
    console.log(fibonacci(i));
    sum += fibonacci(i);
}
console.log("tong: ".concat(sum));
