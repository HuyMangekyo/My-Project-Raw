"use strict";
exports.__esModule = true;
exports.Cylinder = void 0;
var Cylinder = /** @class */ (function () {
    function Cylinder() {
    }
    Cylinder.getVolume = function (radius, height) {
        var baseArea = Math.PI * radius * radius;
        var perimeter = 2 * Math.PI * radius;
        var volume = perimeter * height + 2 * baseArea;
        return volume;
    };
    return Cylinder;
}());
exports.Cylinder = Cylinder;
