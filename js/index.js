/*Массивы*/

// К массиву доступ по индексу

// 100, 120, 6, 320, 15
// product1, product2, product3, product4, product5
// totalSum

/*let total=0, p1, p2, p3, p4 , p5, ... p30;
p1 =100, p2 = 120, p3=6, p4=320, p5=15;
total = p1 + p2 + p3+ p4 + p5;

console.log(total);
*/

/*


//------------------------
//1 
let array0 = [];
let array1 = [100, 120, 6, 320, 15];
/*
//2
let array2 = new Array();
*/

/*
let size = array1.length;
let i;

// Задание. Вывести массив 
//1
console.log(array1);
// bad method
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);
console.log(array1[3]);
console.log(array1[4]);
//2
// i - index 0...4
for(i = 0; i < array1.length; i++){
    console.log(i,' ', array1[i]);
}

//Задание. Обьявить массив из 5 чисел и каждое увеличить в 2 раза
let array3 = [10,20,30,40,50];
for(i=0; i<array3.length; i++){
    array3[i] *= 2;//array3[i] = array3[i] * 2;
}
console.log('array 3task:', array3);

// Задание. каждое число увеличить на 100
for(i=0; i<array3.length; i++){
    array3[i] += 100;
}
console.log('array 3task:', array3);

// Задача вывести массив наоборот (с последнего к первому)

for(i = array3.length-1; i>=0; i--){
    console.log(array3[i]);
    //console.log(i); вывод индекса

}

// Задача вывести элементы с нечетными индексами
for(i=1; i<array3.length; i = i + 2){
    console.log(array3[i]);
}
// Задача вывести элементы с четными индексами
for(i=0; i<array3.length; i = i + 2){
    console.log(array3[i]);
}

// четные элементы массива
for(i=1; i<array3.length; i++){
    if(array3[i] %2 == 0) {console.log(array3[i]);}
}

// нечетные элементы массива
for(i=1; i<array3.length; i++){
    if(array3[i] %2 == 1) {console.log(array3[i]);}
}

// задача . вывести индексы нулевых элементов [100, 0, 0, 300, 0, 500, 600, 0, 0]
// подсчитать количество нулевых элементов

// конкретный тип - контейнер let
// набор данных array []

// условие if , if-else
// циклы for, while

//  функция function  (готовой функциональный продукт, прибор )

let a = [10, -20, 50, 100, 0, 0, 300, 0, 500, 600, 0, 0];
/*
for(i=0; i<array4.length; i++){
    if(array4[i] == 0){
        console.log(i); // i - номер array4[i] - элемент
    }
}

let countZeros = 0;
for(i=0; i<array4.length; i++){
    if(array4[i] == 0){
        countZeros++;
    }
}
*/
/*
// вывести все первые элементы массива до первого нуля и подсчитать количество
let countNotNullElements = 0;
for(i=0; i<a.length; i++){
    if(a[i] == 0) break;
    console.log(a[i]);
    countNotNullElements++;
}
console.log(countNotNullElements);
*/
// сумма соседних элементов
// 1+2  2+3  3+4  4+5 ....
// 1+2  3+4  5+6  7+8 ...

/*
а[0] первый элемент массива
a[1] второй элемент массива
a[a.length -1] - последний элемент массива
a[i] - текущий
a[i+1] - следующий
a[i+2] - следующий через 1
a[i-1] - предыдущий
*/

/*
let sum = 0;
for(i; i < a.length-1 ;i++) {
    sum = a[i] + a[i+1];
    console.log(sum);    
}
*/

/*

// задача сохранить результаты сум в отдельный массив
// i индекс для 1 массива, j - индекс для 2 массива
let sum1 = [];
for(i; i < a.length-1 ;i++) {
    sum1[i] = a[i] + a[i+1];   
}
console.log(sum1);

// 2 задача 1+2  3+4  5+ 6 ....
let sum = 0;
for(i; i < a.length-1 ;i=i+2) {
    sum = a[i] + a[i+1];
    console.log(sum);    
}
*/
// сохранить результаты

let i, a = [10, -20, 50, 100, 0, 0, 300, 0, 500, 600, 0, 0];
let j=0, sum2 = [];
for(i=0; i < a.length-1 ;i=i+2) {
    sum2[j] = a[i] + a[i+1]; 
    j++;  
}
console.log(sum2);

/*
for(i=0, j=0; i < a.length-1 ;i=i+2, j++) {
    sum2[j] = a[i] + a[i+1]; 
}
*/



// сохранить результаты индексов нулевых элементов
let arrZeroIndexes = [], indexZero;
for(i=0, indexZero = 0 ; i<a.length; i++){
    if(a[i] == 0){
        arrZeroIndexes[indexZero] = i;
        indexZero++;
    }
}
