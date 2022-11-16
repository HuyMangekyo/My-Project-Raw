import {Stack} from "./Stack";
import {Queue} from "./Queue";
function testString(string){
    let stackString = new Stack();
    let queueString = new Queue();
    for (let i of string) {
        stackString.push(i)
        console.log(queueString.show())
        queueString.enQueue(i)
    }
    for (let i of string){
        if(stackString.pop()!=queueString.deQueue()){
        return "chuoi khong doi xung"}
    }
    return "chuoi doi xung"
}
let stringTest = "ableelba"
console.log(testString(stringTest))