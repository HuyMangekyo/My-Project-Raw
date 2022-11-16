import {Patient} from "./QueuePatient";
import {QueuePatient} from "./QueuePatient";
let ListPatient = new  QueuePatient()
let Patient1 = new Patient("Smith",2)
// let Patient2 = new Patient("Jones",4)
// let Patient3 = new Patient("Fehrenbach",6)
// let Patient4 = new Patient("Brown",1)
let Patient5 = new Patient("Ingram",1)
ListPatient.enQueue(Patient1)
// ListPatient.enQueue(Patient2)
// ListPatient.enQueue(Patient3)
// ListPatient.enQueue(Patient4)
ListPatient.enQueue(Patient5)




console.log(`kham cho benh nhan `+ListPatient.deQueue())
console.log(`kham cho benh nhan `+ListPatient.deQueue())
console.log(`kham cho benh nhan `+ListPatient.deQueue())