import {Node} from "./Node";
export class LinkedList<T> {
    head: Node<T> | null;
    tail: Node<T> | null;
    size: number;
    constructor(head: Node<T>, tail: Node<T>) {
        this.head = head;
        this.tail = tail;
        this.size = 0
    }
    insertFistNode(data:T):void{
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
        if (!this.tail){
            this.tail = node
        }
        this.size ++
    }

}