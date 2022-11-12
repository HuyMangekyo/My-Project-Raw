import {Stack} from "./Stack";
import {Queue} from "./Queue";
function testString(string){
    let stackString = new Stack();
    let queueString = new Queue();
    for (let i of string) {
        stackString.push(i)
        queueString.enQueue(i)
    }
    for (let i of string){
        if(stackString.pop()!=queueString.deQueue()){
        return "chuoi khong doi xung"}
    }
    return "chuoi doi xung"
}
let stringTest = "able was I ere I saw elba"
console.log(testString(stringTest))