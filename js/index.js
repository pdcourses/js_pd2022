function MyArray(){
    this.length = 0;
}
MyArray.prototype = {
    push(val){
        this[ this.length++] = val;
    },
    pop(){
        if(this.length > 0){
            const res = this[--this.length];
            delete this[this.length];
            return res;
        }
    }
};

const a = new MyArray();
console.log(a);
a.push(10);
a.push('hello');
a.push({name: "Vasya"})
a.push( (() => {} ));

console.log(a);

a.pop();
console.log(a);