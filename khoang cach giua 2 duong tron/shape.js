var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this.color = color;
        this.filled = filled;
    }
    Shape.prototype.toString = function () {
        if (this.filled == true) {
            return "A Shape with color of ".concat(this.color, " and filled");
        }
        else {
            return "A Shape with color of ".concat(this.color, " and not filled");
        }
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, filled, radius) {
        var _this = _super.call(this, color, filled) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getperimeter = function () {
        return (2 * Math.PI * this.radius).toFixed(2);
    };
    Circle.prototype.getArea = function () {
        return (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
    };
    Circle.prototype.toString = function () {
        return " A Circle with radius = ".concat(this.radius, ", which a sub class of ").concat(_super.prototype.toString.call(this));
    };
    return Circle;
}(Shape));
var shape1 = new Shape("blue", true);
var Circle1 = new Circle("red", false, 3);
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(color, filled, width, length) {
        var _this = _super.call(this, color, filled) || this;
        _this.width = width;
        _this.length = length;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.length;
    };
    Rectangle.prototype.toString = function () {
        return " A Rectangle with area = ".concat(this.getArea()).concat(_super.prototype.toString.call(this));
    };
    return Rectangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color, filled, side) {
        return _super.call(this, color, filled, side, side) || this;
    }
    return Square;
}(Rectangle));
var square1 = new Square("yellow", true, 3);
console.log(square1.width);
