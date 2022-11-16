"use strict";
exports.__esModule = true;
exports.QueuePatient = exports.Patient = void 0;
var Patient = /** @class */ (function () {
    function Patient(name, code) {
        this.name = name;
        this.code = code;
    }
    return Patient;
}());
exports.Patient = Patient;
var QueuePatient = /** @class */ (function () {
    function QueuePatient(capacity) {
        if (capacity === void 0) { capacity = Infinity; }
        this.capacity = capacity;
        this.storage = [];
    }
    QueuePatient.prototype.size = function () {
        return this.storage.length;
    };
    QueuePatient.prototype.enQueue = function (data) {
        this.storage.push(data);
    };
    QueuePatient.prototype.firstPrioritizePatient = function () {
        var maxPrioritize = 1;
        var prioritize = 7;
        var prioritizePatient;
        for (var i = 0; i < this.size(); i++) {
            if (this.storage[i].code === maxPrioritize) {
                return this.storage[i];
            }
            if (prioritize > this.storage[i].code) {
                prioritize = this.storage[i].code;
                prioritizePatient = this.storage[i];
            }
        }
        return prioritizePatient;
    };
    QueuePatient.prototype.deQueue = function () {
        if (!this.size()) {
            return undefined;
        }
        else {
            if (!this.firstPrioritizePatient()) {
                return "het benh nhan";
            }
            var patientNext = this.firstPrioritizePatient();
            var patientIndex = this.storage.indexOf(patientNext);
            this.storage.splice(patientIndex, 1);
            return patientNext.name;
        }
    };
    QueuePatient.prototype.showList = function () {
        return this.storage;
    };
    return QueuePatient;
}());
exports.QueuePatient = QueuePatient;
