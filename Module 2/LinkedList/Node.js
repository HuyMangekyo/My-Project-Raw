"use strict";
exports.__esModule = true;
exports.NodeScore = exports.Student = exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(data) {
        this.next = null;
        this.data = data;
    }
    Node.prototype.readData = function () {
        return this.data;
    };
    return Node;
}());
exports.Node = Node;
var Student = /** @class */ (function () {
    function Student(name, score) {
        this.name = name;
        this.score = score;
    }
    return Student;
}());
exports.Student = Student;
var NodeScore = /** @class */ (function () {
    function NodeScore(student) {
        this.next = null;
        this.data = student;
    }
    NodeScore.prototype.readName = function () {
        return this.data.name;
    };
    NodeScore.prototype.readScore = function () {
        return this.data.score;
    };
    return NodeScore;
}());
exports.NodeScore = NodeScore;
