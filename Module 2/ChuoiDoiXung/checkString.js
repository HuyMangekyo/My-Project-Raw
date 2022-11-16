"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
var Queue_1 = require("./Queue");
function testString(string) {
    var stackString = new Stack_1.Stack();
    var queueString = new Queue_1.Queue();
    for (var _i = 0, string_1 = string; _i < string_1.length; _i++) {
        var i = string_1[_i];
        stackString.push(i);
        console.log(queueString.show());
        queueString.enQueue(i);
    }
    for (var _a = 0, string_2 = string; _a < string_2.length; _a++) {
        var i = string_2[_a];
        if (stackString.pop() != queueString.deQueue()) {
            return "chuoi khong doi xung";
        }
    }
    return "chuoi doi xung";
}
var stringTest = "ableelba";
console.log(testString(stringTest));
