interface IQueue<T>{
    enQueue(item: T):void;
    deQueue():T|undefined;
    size()
    show()
}
export class Queue implements IQueue<string>{
    private storage:string[]=[]
    constructor(private capacity:number=Infinity) {
    }
    size() {
        throw new Error("Method not implemented.");
        return this.storage.length
    }
    enQueue(item:string): void{
        this.storage.push(item)
    }
    deQueue(): string | undefined {
        return this.storage.shift()
    }
    show() {
        return this.storage
    }
}