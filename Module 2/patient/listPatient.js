"use strict";
exports.__esModule = true;
var QueuePatient_1 = require("./QueuePatient");
var QueuePatient_2 = require("./QueuePatient");
var ListPatient = new QueuePatient_2.QueuePatient();
var Patient1 = new QueuePatient_1.Patient("Smith", 2);
// let Patient2 = new Patient("Jones",4)
// let Patient3 = new Patient("Fehrenbach",6)
// let Patient4 = new Patient("Brown",1)
var Patient5 = new QueuePatient_1.Patient("Ingram", 1);
ListPatient.enQueue(Patient1);
// ListPatient.enQueue(Patient2)
// ListPatient.enQueue(Patient3)
// ListPatient.enQueue(Patient4)
ListPatient.enQueue(Patient5);
console.log("kham cho benh nhan " + ListPatient.deQueue());
console.log("kham cho benh nhan " + ListPatient.deQueue());
console.log("kham cho benh nhan " + ListPatient.deQueue());
