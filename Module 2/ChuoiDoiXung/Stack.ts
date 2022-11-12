interface IStack<T>{
    push(item: T):void;
    pop():T;
    peek():T|undefined;
    size()
}
export class Stack<T> implements IStack<T>{
    private storage:T[]=[]
    constructor(private capacity:number=Infinity) {}
    size() {
        return this.storage.length
    }
    push(item: T):void {
        this.storage.push(item)
    }
    pop():T{
        return this.storage.pop()
    }
    peek():T|undefined {
        return this.storage[this.size()-1]
    }
}