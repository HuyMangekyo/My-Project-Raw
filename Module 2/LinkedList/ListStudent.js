"use strict";
exports.__esModule = true;
var Node_1 = require("./Node");
var Node_2 = require("./Node");
var ListStudent = /** @class */ (function () {
    function ListStudent() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    ListStudent.prototype.insertFist = function (student) {
        var node = new Node_1.NodeScore(student);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    ListStudent.prototype.insertLast = function (student) {
        var node = new Node_1.NodeScore(student);
        if (!this.head) {
            this.insertFist(student);
        }
        else {
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    };
    ListStudent.prototype.showList = function () {
        var currentNode = this.head;
        // console.log(this.head)
        console.log(currentNode);
        while (currentNode) {
            console.log("sinh vien ".concat(currentNode.data.name, ", diem so ").concat(currentNode.data.score));
            currentNode = currentNode.next;
        }
    };
    ListStudent.prototype.totalStudentFail = function () {
        var currentNode = this.head;
        var count = 0;
        while (currentNode) {
            var failSore = 5;
            if (currentNode.data.score < failSore) {
                count++;
            }
            currentNode = currentNode.next;
        }
        console.log("Co ".concat(count, " sinh vien thi lai"));
    };
    ListStudent.prototype.listStudentSoreMax = function () {
        var currentNode = this.head;
        var maxScore = 0;
        var listStudent = [];
        while (currentNode) {
            if (maxScore < currentNode.data.score) {
                maxScore = currentNode.data.score;
                listStudent = [currentNode.data.name];
            }
            else if (maxScore == currentNode.data.score) {
                listStudent.push(currentNode.data.name);
            }
            currentNode = currentNode.next;
        }
        console.log("diem cao nhat ".concat(maxScore));
        console.log(listStudent);
    };
    ListStudent.prototype.findByName = function (name) {
        var currentNode = this.head;
        var listStudent = [];
        while (currentNode) {
            if (name == currentNode.data.name) {
                var student = { name: currentNode.data.name, score: currentNode.data.score };
                listStudent.push(student);
            }
            currentNode = currentNode.next;
        }
        console.log(listStudent);
    };
    return ListStudent;
}());
var student1 = new Node_2.Student("Nguyen Van A", 4);
var student2 = new Node_2.Student("Nguyen Van B", 7);
var student3 = new Node_2.Student("Nguyen Thi C", 3);
var student4 = new Node_2.Student("Nguyen Van A", 7);
var listStudent = new ListStudent();
listStudent.insertFist(student1);
listStudent.insertLast(student2);
listStudent.insertLast(student3);
listStudent.insertLast(student4);
listStudent.totalStudentFail();
console.log("");
listStudent.listStudentSoreMax();
console.log("");
listStudent.findByName("Nguyen Van A");
