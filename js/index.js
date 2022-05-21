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
//------------------------
//1 
let array0 = [];
let array1 = [100, 120, 6, 320, 15];
/*
//2
let array2 = new Array();
*/

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

