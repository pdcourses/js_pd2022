/*
let a1 = [1,2,100,200,3];

function array(c){
	for (let i = 0; i < c.length; i++){
	if (c[i] < 100) {
		c[i]++;
	}
	}
}
console.log(array(c)); //[2,3,100,200,4]


function array(c){
    let sum = 0;
	for (let i = 0; i < c.length; i++){
	if (c[i] < 100) {
		sum += c[i];
	}
	}
    return sum;
}

let res = array(a1);
console.log(res);

*/

/*
let array = [1,2,100,200,3,3,3,3];

const [a0, ...rest] = array;
console.log(a0);
console.log(rest);

const [arr0, arr1, ,, ...rest2] = array;
console.log(arr0);
console.log(arr1);
console.log(rest2);

let b = [1,2,3,4, [10,20,[100,200,300],30,40], 5, 6];

const [,,,,[,,innerArray,,],,] =b
//const [,,,,[,,innerArray,...r1],...r2] =b
console.log(innerArray);
*/

/*
SET
набор уникальных значений / похоже на массив только уникальные

const s1 = new Set();
const s2 = new Set(array);

s1.add(100);
s1.add(-5);
s1.add('hello');

s1.delete('hello');

s1.has(100);

s1.clear(); //delete all
*/

//MAP
// key+value
/*
const map1 = new Map();

map1.set(100,'Vasya');
map1.set(101,'Ann');
map1.set(103,'Tom');
map1.set(104,'Fox');

map1.delete(103)

map1.has(100) //true

map1.get(100) //'Vasya'


map1.set(100,'Kolya');

console.log(map1);
*/