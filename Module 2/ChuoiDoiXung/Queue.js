"use strict";
exports.__esModule = true;
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue(capacity) {
        if (capacity === void 0) { capacity = Infinity; }
        this.capacity = capacity;
        this.storage = [];
    }
    Queue.prototype.size = function () {
        throw new Error("Method not implemented.");
        return this.storage.length;
    };
    Queue.prototype.enQueue = function (item) {
        this.storage.push(item);
    };
    Queue.prototype.deQueue = function () {
        return this.storage.shift();
    };
    Queue.prototype.show = function () {
        return this.storage;
    };
    return Queue;
}());
exports.Queue = Queue;
