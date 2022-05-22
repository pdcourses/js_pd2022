/*
Область видимость
Лексическая область видимости. Лексическое окружение
*/

/*
function f(a,b){
    var x=5;
}
*/

//******************** */
/*
let sum=0;
//console.log('i=',i); error!
for(var i=0; i<10; i++){
    sum += i;
    console.log(i, sum);
}
console.log(sum);
//console.log('i=',i); error!


console.log('i=',i);
*/

/*
if(true){
    const test=100;
    console.log(test);
}
*/
/*
console.log(test);
if(true){
    var test=200;
    console.log(test);
}
*/

/*
// поднятие переменных и замыкание
if (true) {
  console.log(test);
  if (true) {
    console.log(test);
    if (true) {
      console.log(test);
      if (true) {
        console.log(test);
        if (true) {
          console.log(test);
          var test = 100;
          console.log(test);
        }
        test=200;
        console.log(test);
      }
      test=300;
      console.log(test);
    }
    test=400;
    console.log(test);
  }
  test=500;
  console.log(test);
}

console.log(this); // доспуп к глобальному обьекту window

console.log(this.test);

*/


// строгий режим
"use strict";
function f(){
    let test=10;
    return test;
}

console.log(f());
// ***************************************
// глобальная область
let x = 100;

function fun1(){
    console.log('x=',x);
}

function fun2(){
    let x = 200;
    console.log('x=',x);
}

function fun3(){
    x = 300;
    console.log('x=',x);
}

function fun4(){
    let a = 10, b=20;
    return (a*b  + 100 - 4*a + 5 )/x;
}


console.log(x); //100
fun1();  //100

fun2(); // 200
console.log(x); //??  100 glob x

fun3(); // 300
console.log(x); //?? 300  glob x


console.log(fun4()); // x=300
console.log(x); //?? x=100





