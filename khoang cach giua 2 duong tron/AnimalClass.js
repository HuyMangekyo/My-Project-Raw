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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger(name) {
        return _super.call(this) || this;
    }
    Tiger.prototype.makeSound = function () {
        return "gru";
    };
    return Tiger;
}(Animal));
var Chicken = /** @class */ (function (_super) {
    __extends(Chicken, _super);
    function Chicken(name) {
        return _super.call(this) || this;
    }
    Chicken.prototype.makeSound = function () {
        return "o` o' o";
    };
    Chicken.prototype.howtoEat = function () {
        return "cooking";
    };
    return Chicken;
}(Animal));
var Fruit = /** @class */ (function () {
    function Fruit() {
    }
    return Fruit;
}());
var Orange = /** @class */ (function (_super) {
    __extends(Orange, _super);
    function Orange(color) {
        return _super.call(this) || this;
    }
    Orange.prototype.howtoEat = function () {
        return "no cooking";
    };
    return Orange;
}(Fruit));
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(color) {
        return _super.call(this) || this;
    }
    Apple.prototype.howtoEat = function () {
        return "no cooking";
    };
    return Apple;
}(Fruit));
var tiger1 = new Tiger("Tom");
// console.log(tiger1.makeSound())
var apple1 = new Apple("blue");
console.log(apple1.howtoEat());
