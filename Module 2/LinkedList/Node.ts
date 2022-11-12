export class Node<T>{
    data:T;
    next:Node<T>|null=null;
    constructor(data:T) {
        this.data = data;
    }
    readData():T{
        return this.data
    }
}
export class Student{
    name:string;
    score: number  ;
    constructor(name: string,score: number) {
        this.name = name;
        this.score = score;
    }
}
export class NodeScore<T> {
    data: Student
    next: NodeScore<T>|null = null;
    constructor(student:Student) {
        this.data = student;
    }
    readName():string{
        return  this.data.name;
    }
    readScore():number{
        return  this.data.score;
    }
}

