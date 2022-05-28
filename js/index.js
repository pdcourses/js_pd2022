/*Object*/

/*
let x;
undefined
const RED_COLOR = '#ff0000';
undefined
let userTest = {};
undefined
userTest
{}[[Prototype]]: Object
typeof userTest
'object'
let userVasya = {
    firstName: 'Vasya',
    lastName: "Ivanov",
    isMale: true,
};
    
undefined
userVasya
{firstName: 'Vasya', lastName: 'Ivanov', isMale: true}firstName: "Vasya"isMale: truelastName: "Ivanov"[[Prototype]]: Object
let Barsik = {
    name: "Barsik",
    color: "multicolor",
    age: 3,
};
undefined
Barsik
{name: 'Barsik', color: 'multicolor', age: 3}
const userTom = {
    name: "Tom",
    surname: "Fox",
    lang: ['ua', 'en', 'it'],
    car: {model: 'zaz', year: 2022, color: 'blue'},
};
    
undefined
userTom
{name: 'Tom', surname: 'Fox', lang: Array(3), car: {…}}
let user1 = {
    name: "Tom",
    sayHello: function() {console.log('Hello');}
};
undefined
user1
{name: 'Tom', sayHello: ƒ}
user1.name
'Tom'
userTom.name
'Tom'
userTom.surname
'Fox'
userTom.lang
(3) ['ua', 'en', 'it']
userTom.car
{model: 'zaz', year: 2022, color: 'blue'}
userTom.lang[0]
'ua'
userTom.lang[1]
'en'
userTom.car
{model: 'zaz', year: 2022, color: 'blue'}
userTom.car.model
'zaz'
user1
{name: 'Tom', sayHello: ƒ}
user1.sayHello
ƒ () {console.log('Hello');}
user1.sayHello()
VM2413:3 Hello
undefined
const Afi = {
    name: "Afi",
    age: "2",
    say: function() {console.log('Affff :)');}
};
undefined
Afi.name
'Afi'
Afi.say()
VM3841:4 Affff :)
undefined
Afi.say
ƒ () {console.log('Affff :)');}

*/


/* Math*/
/*
isNaN(5)
false
isNaN('5')
false
isNaN("5")
false
let x = 10;
undefined
isNaN(x)
false
Math.PI
3.141592653589793
let res;
undefined
res = 1 + 4 + 1.2 - 10 + Math.PI
-0.6584073464102067
// 2 * pi * r
undefined
let r = 50;
undefined
res = 2 * Math.PI * r
314.1592653589793
Math.abs(-100)
100
r = -999.2;
-999.2
Math.abs(r)
999.2
Math.ceil(5.2)
6
Math.floor(5.2)
5
Math.floor(5.9)
5
Math.round(5.2)
5
Math.round(5.9)
6
2 ** 3
8
Math.pow(2,3)
8
Math.random()
0.9106359290594563
Math.random()
0.6904826147830747
Math.random()
0.49814738629108635
Math.random() * 20
7.104531728751784
Math.random() * 20
8.133114105301518
Math.random() * 20
16.33594486815825
Math.round(Math.random() * 20)
11
Math.round(Math.random() * 20)
3
Math.ceil(Math.random() * 20)
5
Math.ceil(Math.random() * 20)
12
Math.ceil(Math.random() * 100)
3
Math.ceil(Math.random() * 100)
79
*/

/*Array*/ 

/*
let a = [1,2,3,4];
undefined
let b = [10, 20, 30];
undefined
res = [...a, ...b];
(7) [1, 2, 3, 4, 10, 20, 30]
...a
VM7198:1 Uncaught SyntaxError: Unexpected token '...'
[...a]
(4) [1, 2, 3, 4]
const [res0, ...rest] = res;
undefined
res0
1
rest
(6) [2, 3, 4, 10, 20, 30]
const [r0, r1, r3,,,...rest] = res;
undefined
r0
1
r1
2
r3
3
rest
(2) [20, 30]
res
(7) [1, 2, 3, 4, 10, 20, 30]
res[0]
1
res.at(0)
1
[10, 20, 30, 40, 50].copyWithin(0, 3);
(5) [40, 50, 30, 40, 50]
[10, 20, 30, 40, 50, 60, 70, 80].copyWithin(0, 3);
(8) [40, 50, 60, 70, 80, 60, 70, 80]
[10, 20, 30, 40, 50, 60, 70, 80].copyWithin(0, 3,4);
(8) [40, 20, 30, 40, 50, 60, 70, 80]
[10, 20, 30, 40, 50, 60, 70, 80].copyWithin(0, 3,5);
(8) [40, 50, 30, 40, 50, 60, 70, 80]
[10, 20, 30, 40, 50, 60, 70, 80].copyWithin(1, 3,5);
(8) [10, 40, 50, 40, 50, 60, 70, 80]
res
(7) [1, 2, 3, 4, 10, 20, 30]
res.pop()
30
res
(6) [1, 2, 3, 4, 10, 20]
res.push(100)
7
res
(7) [1, 2, 3, 4, 10, 20, 100]
res.push(200)
8
res
(8) [1, 2, 3, 4, 10, 20, 100, 200]
res.reverse()
(8) [200, 100, 20, 10, 4, 3, 2, 1]
res
(8) [200, 100, 20, 10, 4, 3, 2, 1]
let resString = res.toString()
undefined
resString
'200,100,20,10,4,3,2,1'
resString = res.join()
'200,100,20,10,4,3,2,1'
resString = res.join('')
'20010020104321'
resString = res.join('-')
'200-100-20-10-4-3-2-1'
resString = res.join('*')
'200*100*20*10*4*3*2*1'
resString = res.join('__')
'200__100__20__10__4__3__2__1'
resString = res.join('-*-')
'200-*-100-*-20-*-10-*-4-*-3-*-2-*-1'
resString = res.join('.')
'200.100.20.10.4.3.2.1'
res
(8) [200, 100, 20, 10, 4, 3, 2, 1]
res.splice(2,1)
[20]0: 20length: 1[[Prototype]]: Array(0)
res.splice(2,2)
(2) [10, 4]
res
(5) [200, 100, 3, 2, 1]
res = [200, 100, 20, 10, 4, 3, 2, 1]
(8) [200, 100, 20, 10, 4, 3, 2, 1]
res.splice(2,1)
[20]
res
(7) [200, 100, 10, 4, 3, 2, 1]
res.splice(0,2)
(2) [200, 100]
res
(5) [10, 4, 3, 2, 1]
a = [10, 20, 30, 40, 50, 60, 70, 80, 90];
(9) [10, 20, 30, 40, 50, 60, 70, 80, 90]
a1=a;
(9) [10, 20, 30, 40, 50, 60, 70, 80, 90]
a1.splice(2,3)
(3) [30, 40, 50]
a1
(6) [10, 20, 60, 70, 80, 90]
a1=a;
(6) [10, 20, 60, 70, 80, 90]
a = [10, 20, 30, 40, 50, 60, 70, 80, 90];
(9) [10, 20, 30, 40, 50, 60, 70, 80, 90]
a.splice(0,5);
(5) [10, 20, 30, 40, 50]
a
(4) [60, 70, 80, 90]
a = [10, 20, 30, 40, 50, 60, 70, 80, 90];
(9) [10, 20, 30, 40, 50, 60, 70, 80, 90]0: 101: 9992: 503: 604: 705: 806: 90length: 7[[Prototype]]: Array(0)
a.splice(1,3,999)
(3) [20, 30, 40]
a
(7) [10, 999, 50, 60, 70, 80, 90]
a = [10, 20, 30, 40, 50, 60, 70, 80, 90];
(9) [10, 20, 30, 40, 50, 60, 70, 80, 90]
a.splice(0,3,999)
(3) [10, 20, 30]
a
(7) [999, 40, 50, 60, 70, 80, 90]
a = [10, 20, 30, 40, 50, 60, 70, 80, 90];
(9) [10, 20, 30, 40, 50, 60, 70, 80, 90]
a.splice(-1, 2)
[90]
a
(8) [10, 20, 30, 40, 50, 60, 70, 80]
a.splice(-1,3)
[80]
a
(7) [10, 20, 30, 40, 50, 60, 70]
a.splice(-3,1)
[50]
a
(6) [10, 20, 30, 40, 60, 70]
a.splice(-3,3)
(3) [40, 60, 70]
a
(3) [10, 20, 30]
a = [10, 20, 30, 40, 50, 60, 70, 80, 90];
(9) [10, 20, 30, 40, 50, 60, 70, 80, 90]
a.splice(-2, 1)
[80]
a
(8) [10, 20, 30, 40, 50, 60, 70, 90]
a.splice(-2, 2)
(2) [70, 90]
a.splice(-3, 2)
(2) [40, 50]
a = [10, 20, 30, 40, 50, 60, 70, 80, 90];
(9) [10, 20, 30, 40, 50, 60, 70, 80, 90]
a.splice(-2, 2, 999)
(2) [80, 90]
a
(8) [10, 20, 30, 40, 50, 60, 70, 999]
a = [10, 20, 30, 40, 50, 60, 70, 80, 90];
(9) [10, 20, 30, 40, 50, 60, 70, 80, 90]
a = [10, 20, 30, 40, 50, 60, 70, 80, 90];
(9) [10, 20, 30, 40, 50, 60, 70, 80, 90]
let a2 = a.slice(3)
undefined
a2
(6) [40, 50, 60, 70, 80, 90]
a2 = a.slice(3,5)
(2) [40, 50]
a
(9) [10, 20, 30, 40, 50, 60, 70, 80, 90]
a.slice(-4)
(4) [60, 70, 80, 90]
a
(9) [10, 20, 30, 40, 50, 60, 70, 80, 90]
a.slice(-4,2)
[]
a.slice(2, -4)
(3) [30, 40, 50]
a
(9) [10, 20, 30, 40, 50, 60, 70, 80, 90]
a.sort()
(9) [10, 20, 30, 40, 50, 60, 70, 80, 90]
res
(5) [10, 4, 3, 2, 1]
res.sort()
(5) [1, 10, 2, 3, 4]
res.sort()
(5) [1, 10, 2, 3, 4]
res.indexOf(10)
1
a = [10, 50, 22, 1, 0, 9, 99];
(7) [10, 50, 22, 1, 0, 9, 99]
a.slice(a.indexOf(0))
(3) [0, 9, 99]
a.slice(0,a.indexOf(0))
(4) [10, 50, 22, 1]
a.splice(0,a.indexOf(0))
(4) [10, 50, 22, 1]
a
(3) [0, 9, 99]
res
(5) [1, 10, 2, 3, 4]
a = [10, 50, 22, 1, 0, 9, 99];
(7) [10, 50, 22, 1, 0, 9, 99]
a.fill(0, 0, 3)
(7) [0, 0, 0, 1, 0, 9, 99]
a.fill(999, 1, 3)
(7) [0, 999, 999, 1, 0, 9, 99]
*/

/*
//HomeWork

function f(arr){
let sum = 0;
....
return sum;
}


function f(arr, threshold){
  let resArr = [];
  for(let i,j; i<arr.length; i++){
    if(arr[i] <= threshold){
       resArr[j] = arr[i];
       j++;
    }
    return resArr;
}

function f(arr1, arr2){
 let i=0, j=0, res = [];
 for(i; i<arr1.length; i++){
    res[i] = arr1[i];
 }
//i=10
 for(j; j<arr2.length; j++){
    res[i+j+1] = arr2[j];
 }

 return res;
}


function f(arr1, arr2){
 let sizeArr1 = arr1.length;
 for(let i=0; i<arr2.length; i++){
    arr1[sizeArr1 + i] = arr2[i];
 }
 return arr1;
}

const resArr = arr1.concat(arr2);

function f(arr1, arr2){
  return arr1.concat(arr2);
}
f(a,b)


const resArr=[...arr1, ...arr2];



//*********************************

function f(limit1, limit2, num){
if(limit1 > limit2) {
}
let res = [], i=0;
for(let n=limit1; n<=limit2; n++){
	if(n%num == 0){
	    res[i] = n;
            i++;
	}
}
return res;
}


const res = f(10, 50, 3);
*/