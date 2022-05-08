// условные операторы
//   >    <     >=     <=     ==     !=    === включая проверку типа
let a,b;

a = 5;
b = 7;

console.log(a > b);
console.log(a < b);
console.log(a == b);
console.log(a != b);
console.log(a === b);

// условный оператор if 
/*
if(условие){
    //набор действий если условие выполняется
}
*/
/*
let userAge = prompt('Введите свой возраст');
if(userAge >= 18) {
    alert('Вы - совершеннолетний');
}
*/

/*
if(условие){
    список действий при выполнении условия
} else{
    список действий при НЕ выполнении условия
}
*/
/*
let userAge = prompt('Введите свой возраст');
if(userAge >= 18) {
    alert('Вы - совершеннолетний');
}else{
    alert('Вы - несовершеннолетний');
}
*/
// Задание. Пользователь вводит число. Проверьте больше или 
// меньше оно 10
/*
let value = prompt('Enter some value');
if(value >= 10){
    console.log('Your value more than 10');
} else{
    console.log('Your value less than 10');
}
*/
// проверить число пожительное, отрицательное или 0
/*
let x = prompt('Enter x');
if( x > 0) {
    console.log('положительное');
} else if (x < 0) {
    console.log('отрицательное');
} else {
    console.log('это ноль');
}
*/

// тернарный оператор ?
//let result = условие ? значение1 : значение2;
/*
let userAge = 18;
let res = (userAge >= 18 ) ? 'совершеннолетний' : 'несовершеннолетний';
console.log(res);
*/
// оператор остаток от деления % для чисел
console.log(5 % 2);

// Задача. Спросить у пользователя число и узнать четное оно или нечетное
//1
let value = prompt('value =');
if (value%2 == 0){
    console.log('четное');
} else{
    console.log('нечетное');
}
//2
if (value%2 != 0){
    console.log('нечетное');
} else{
    console.log('четное');
}
//3
let res = (value%2 == 0) ? 'четное' : 'нечетное';
console.log(res);

// несколько условий
// && and - и || or - или

// пример . поступаемое число положительное и больше 10
if(value>0 && value>10){}
// пример. поступаемое число положительное или равно 0
if(value>0 || value==0){}

if(weekDay == "Sunday" && isWorking == true) { console.log('yes');}
if(surface == "бумага" || surface == "салфетка") {}




