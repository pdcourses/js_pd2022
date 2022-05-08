//alert("Hello, World!");

console.log("Hello, Vasya!!!");
console.log("Hello ","Java Script", "!!!!!");

//******************* */
/*
// переменые style camelCase;

//обьявление переменных
let x;
let y;
let userName;
let userColorAvatarBG; 
let a, b, c;
// инициализация переменных
x = 5;
y = -100;
a = 3.14;
b = 0.00005;
userName = "Vasya";
userColorAvatarBG = "red";

console.log(x);
console.log(y,a,b);
console.log("User name is ",userName);
console.log('A = ',a,' and B = ', b);

// обьявление с инициализацией
let d = 200;
let name1 = "Tom Fox";
console.log(name1);

// Что мы можем положить в (контейнер) переменную? ТИПЫ
let x2;
x2 = 100;
console.log(x2);
x2 = -3;
console.log(x2);
x2 = "hello";
console.log(x2);
x2 = 'vasya';
console.log(x2);
x2 = true; // логический тип true , false
console.log(x2);

// мы можем ложить контейнеры один в один
console.log('x=',x);
console.log('y=',y);
x = y;
console.log('x=',x);
console.log('y=',y);

// операции
x = 10;

console.log('x=',x);
x = x + 5;
console.log('x=',x);
x = x - 5;
console.log('x=',x);
x = x * 5;
console.log('x=',x);
x = x / 5;
console.log('x=',x);

y = 2;
x = 10;

console.log('x=',x);
x = x + y;
console.log('x=',x);
x = x - y;
console.log('x=',x);
x = x * y;
console.log('x=',x);
x = x / y;
console.log('x=',x);

let a1 =10;
let a2 = 0, a3 = "Julia";
let a4 = false, a5 = -2;

let result;
result = a1 + a5;
result = a1 - a5;
result = a1 * a5;
result = a1 / a5;
console.log(result);

result = result * 2;
console.log(result);

result = 500 - result;
console.log(result);


*/
// константа

const COLOR_RED = "#FF0000";
const COLOR_GREEN = "#00FF00";
const COLOR_BLUE = "#0000FF";
const MAX_QUERIES = 3;

//COLOR_RED = "#FF0011"; errror!

let x = 100;
x = x + MAX_QUERIES;
console.log(x);

// операции краткие записи
// + - * /
let a1 = 200, a2 = 100, result;
a1 += 5;  //a1 = a1 + 5;
a1 -=5; //a1 = a1 - 5;
a1 *= 5; //a1 = a1 * 5;
a1 /= 5; //a1 = a1 / 5;

a2 += a1; //a2 = a2 + a1;
a2 -= a1; //a2 = a2 - a1;
a2 *= a1; //a2 = a2 * a1;
a2 /= a1; //a2 = a2 / a1;

// операция инкремент / декремент
x= 10;

x++; //x = x+1; или ++х

x--; //x = x-1; или --х

// возведение в степень
result = 5 ** 2;
console.log(result);
result = 5 ** 3;
console.log(result);
result = 5 ** (1/2);
console.log(result);


/*
Задание
1 Создайте переменные a=10 и b=20. Отнимите от a переменную b и 
результат присвойте переменной c. Затем создайте переменную d, 
присвойте ей значение c. Сложите переменные c и d, 
а результат запишите в переменную result.

2 Переделайте этот код так, чтобы в нем использовались операции 
+=, -=, *=, /=, ++, - -
let num = 100;
num = num + 7;
num = num - 18;
num = num * 10;
num = num / 15;
num = num + 1;
num = num - 1;

3 Спросите у пользователя число. Возведите это число в квадрат.

*/

/*

// решение
//1
let a=10, b=20, c, d, res;
c = a - b;
d = c;
res = c + d;
console.log(res);

//2
let num = 100;
num += 7;
num -= 18;
num *= 10;
num /= 15;
num += 1; // num++
num -= 1; // num--

//3
let userNumber = prompt('Enter some value');
res = userNumber ** 2;
console.log('Result task3 is ',res);
*/

//4
// Задание : вычислите площать прямоугольника по введенным данным
// S = a * b;

//5
// Задание : перевести мм в сантиметры (спросить мм в ответе выдать см)

//4
let a = 5, b=7, S;
S = a*b;
console.log('Square is ', S, 'm');

//5
let userValueMM, userValueCM;
userValueMM = 1000;
userValueCM = userValueMM / 10;
console.log(userValueMM, "mm =", userValueCM, "cm");








