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
        //indexNode.prev = newElem;
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

    [Symbol.iterator] (){
        let currentElement = this.head; 
        return{
            next(){
                if(currentElement){
                    const value = currentElement.value; 
                    currentElement = currentElement.next; 
                    return{
                        value: value,
                        done: false,
                    };
                } else{
                    return{
                        done: true,
                    }
                }

            }
        }
    }
}


const list1 = new List();
list1.addEndElem(10);
list1.addEndElem(20);
list1.addEndElem(30);
console.log(list1);


/*
class MyArray{
    constructor(arr){
        this.arr = arr;
    }
    [Symbol.iterator] () {
        let index =0;
        let copy_arr = this.arr;
        return{
            next(){
                return index < copy_arr.length ?
                        {value: copy_arr[index++],
                        done: false}
                    : {done: true}
            }
        }
    }
}




let arr1 = [10,20,30,40];
let test = new MyArray(arr1);
for(let i of test){
    console.log(i);
}
*/

class Stack{
    constructor(maxSize = 5){
        this.size = 0;
        this.maxSize = maxSize;
    }
    isEmpty(){
        return this.size == 0;
    }
    push(value){
        if(this.size  >= this.maxSize){
            throw new RangeError('стек переполнен');
        }
        this.size += 1;
        this[this.size] = value;

    }
    pop(){
        if(this.isEmpty()){ return;}
        else{
        const value = this[this.size];
        delete this[this.size--];
        return value;}
    }
}

const stack1 = new Stack(4);
stack1.push(100);
stack1.push('vasya');
stack1.push('hello');


