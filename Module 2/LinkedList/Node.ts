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
export class NodeScore<T> extends Node<T>{
    data:T
    name:string
    score:number;
    constructor(data:T,name:string,score:number,next:NodeScore<T>) {
        super(data);
        this.name = name;
        this.score = score;
    }
    readName():string{
        return  this.name;
    }
    readScore():number{
        return  this.score
    }
}
