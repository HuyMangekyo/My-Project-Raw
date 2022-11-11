var SPEED;
(function (SPEED) {
    SPEED[SPEED["SLOW"] = 1] = "SLOW";
    SPEED[SPEED["MEDIUM"] = 2] = "MEDIUM";
    SPEED[SPEED["FAST"] = 3] = "FAST";
})(SPEED || (SPEED = {}));
;
var Fan = /** @class */ (function () {
    function Fan() {
        this.speed = SPEED.SLOW;
        this.on = false;
        this.radius = 5;
        this.color = "blue";
    }
    Fan.prototype.setSpeed = function (newSpeed) {
        this.speed = newSpeed;
    };
    Fan.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Fan.prototype.setColor = function (color) {
        this.color = color;
    };
    Fan.prototype.setOn = function (on) {
        this.on = on;
    };
    Fan.prototype.status = function () {
        if (this.on === true) {
            return "Fan is on: ".concat(this.color, ",").concat(this.radius, ", ").concat(this.speed);
        }
        else {
            return "Fan is off: ".concat(this.color, ",").concat(this.radius);
        }
    };
    return Fan;
}());
var fan1 = new Fan();
fan1.setSpeed(SPEED.FAST);
fan1.setRadius(10);
fan1.setColor("yellow");
fan1.setOn(true);
var fan2 = new Fan();
fan2.setSpeed(SPEED.MEDIUM);
console.log(fan1.status());
console.log(fan2.status());
