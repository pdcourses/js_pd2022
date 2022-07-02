class Elem{
    constructor(value, next = null, prev = null){
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}
class List{
    constructor(){
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    addStartElem(value){
        const newHead = new Elem(value, this.head, null );
        this.size ++;
        this.head = newHead;
        if(!this.tail) { this.tail = newHead; }
        if(this.head) {this.head.prev = newHead;}
    }
    addEndElem(value){
        const newTail = new Elem(value, null, this.tail);
        this.size++;
        this.tail = newTail;
        if(!this.head) {this.head = newTail;}
        if(this.tail) {this.tail.next = newTail;}

    }
    addAfterNode(indexNode, value){
        if(this.tail == indexNode) {
            this.addEndElem(value);
            return;
        }
        const newElem = new Elem(value, indexNode.next, indexNode);
        newElem.next = indexNode;
        //newElem.next.prev = indexNode;
        this.size ++;

    }
    /*
    addBeforeNode(indexNode, value){
        if(this.head == indexNode) {
            this.addStartElem(value);
            return;
        }
        const newElem = new Elem(value, indexNode.next, indexNode);
        this.size ++;
        newElem.next = indexNode;
        newElem.next.prev = indexNode;
    }*/
}

const list1 = new List();
list1.addEndElem(10);
list1.addEndElem('hello');
console.log(list1);
