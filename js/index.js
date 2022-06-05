// method for-in for-of

/*
let a = [], i;
for(i=0; i<a.length; i++){
    console.log(a[i]);
}
*/

// object  for-in

const user = {
    name: 'Vasya',
    surname: 'Ivanov',
    age: 20,
    isMale: true
}; 

for(let i in user){
    console.log('key=', i);
    console.log('value=', user[i]);
}

// array   for-of    / for(){}     / array.forEach()
// если для каждого элемента чтото сделать надо

const a = [10,20,30,40,50];

for(let value of a){
    console.log(`el=${value}`);
}




