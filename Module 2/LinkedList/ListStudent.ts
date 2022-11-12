import {NodeScore} from "./Node";
import {Student} from "./Node";
class ListStudent<T> {
    head:NodeScore<T> | null;
    tail: NodeScore<T> |null;
    size: number;
    constructor() {
        this.head = null;
        this.tail= null;
        this.size= 0;
    }
    insertFist(student:Student):void{
        let node = new NodeScore(student);
        node.next = this.head;
        this.head = node;
        if (!this.tail){
            this.tail = node
        }
        this.size++
    }
    insertLast(student:Student):void{
        let node = new NodeScore(student)
        if (!this.head){
            this.insertFist(student);
        }else {

            this.tail.next = node;
            this.tail = node;
            this.size++
        }
    }
    showList():void{
        let currentNode = this.head
        // console.log(this.head)
        console.log(currentNode)
        while (currentNode){
            console.log(`sinh vien ${currentNode.data.name}, diem so ${currentNode.data.score}`)
            currentNode = currentNode.next
        }
    }
    totalStudentFail():void{
        let currentNode =this.head;
        let count =0;
        while (currentNode){
            const failSore = 5;
            if (currentNode.data.score<failSore){
                count++
            }
            currentNode = currentNode.next;
        }
        console.log(`Co ${count} sinh vien thi lai`)
    }
    listStudentSoreMax():void{
        let currentNode =this.head;
        let maxScore=0;
        let listStudent:string[] = [];
        while (currentNode){
            if (maxScore < currentNode.data.score){
                maxScore = currentNode.data.score;
                listStudent= [currentNode.data.name]
            }else if(maxScore == currentNode.data.score){
                listStudent.push(currentNode.data.name)
            }
            currentNode = currentNode.next;
        }
        console.log(`diem cao nhat ${maxScore}`)
        console.log(listStudent)
    }
    findByName(name:string):void{
        let currentNode = this.head;
        let listStudent: object[]=[]
        while (currentNode){
            if (name == currentNode.data.name) {
                let student = {name:currentNode.data.name,score:currentNode.data.score}
                listStudent.push(student)
            }
            currentNode = currentNode.next;
        }
        console.log(listStudent)
    }
}
let student1 = new Student("Nguyen Van A",4)
let student2 = new Student("Nguyen Van B",7)
let student3 = new Student("Nguyen Thi C",3)
let student4 = new Student("Nguyen Van A",7)
let listStudent = new ListStudent();
listStudent.insertFist(student1);
listStudent.insertLast(student2);
listStudent.insertLast(student3);
listStudent.insertLast(student4);
listStudent.totalStudentFail();
console.log("");
listStudent.listStudentSoreMax()
console.log("");
listStudent.findByName("Nguyen Van A")
