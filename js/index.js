function MyArray(){
    this.length = 0;
}
MyArray.prototype = {
    push(val){
        this[ this.length++] = val;
    }
};

const a = new MyArray();
console.log(a);
a.push(10);
a.push('hello');
a.push({name: "Vasya"})
a.push( (() => {} ));

console.log(a);