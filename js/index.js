/*
const r = /[a-z]+/g;
const s = 'Hello Java script regExp 123 !';

console.log(r.test(s));
// test вернет true/false

//поиск
//1 match / matchAll
//2 search

console.log(s.search(r));

console.log(s.match(r));
*/

const regColor = /\#[A-F0-9]{6}/g;
const arr = ['#112233', '#FA34B2', 'BB1122', '#ab1122', '112233'];

for(let i=0; i<arr.length; i++){
    console.log(i,regColor.test(arr[i]));
}


console.log('#112233'.match(regColor));
