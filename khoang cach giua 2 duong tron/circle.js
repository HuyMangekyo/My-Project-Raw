"use strict";
exports.__esModule = true;
var Circle = /** @class */ (function () {
    function Circle(color, radius) {
        this.color = color;
        this.radius = radius;
        this.color = color;
        this.radius = radius;
    }
    return Circle;
}());
var circleList = [];
circleList.push(new Circle("yellow", 5));
circleList.push(new Circle("red", 10));
circleList.push(new Circle("blue", 15));
function showCircle(circle) {
    console.log("hinh tron nay co mau ".concat(circle.color, " va ban kinh ").concat(circle.radius));
}
circleList.forEach(showCircle);
exports["default"] = Circle;
