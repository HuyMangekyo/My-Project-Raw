"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
function reverse(array) {
    var stack = new Stack_1.Stack();
    array.forEach(function (val) {
        stack.push(val);
    });
    console.log(stack);
    console.log(stack.size());
    for (var i = 0; i < array.length; i++) {
        console.log(typeof array[i] + "  " + array[i] + " va    " + stack.pop());
        // array[i] = stack.pop()
    }
}
var arrayTest = [1, 2, 3, 4, 5];
reverse(arrayTest);
