/*
Задачи
1. создать массив чисел [4, 0, -1, -5, 3.14, 0, 0, 100, -4, 2.45, 4, 0, 4]
вывести в консоль
2. найти и вывести все отрицательные числа массива <0
3. посчитать сколько получилось отрицательных чисел (счетчик)
4*. сохранить результаты работы (в массив)
два счетчика i - исходного массива, j - для массива с результатами
5*.  заменить все отрицательные элементы в исходном массиве на 0  
*/

let a = [4, 0, -1, -5, 3.14, 0, 0, 100, -4, 2.45, 4, 0, 4];
console.log(a);

let countBelowZeroEls  = 0, arrayElBelowZero = [], arrayIndexesElBelowZero = [] ;
for(let i=0; i<a.length; i++){
    if( a[i] < 0){
        //console.log(a[i]);
        arrayElBelowZero [countBelowZeroEls] = a[i];
        arrayIndexesElBelowZero [countBelowZeroEls] = i;
        countBelowZeroEls++;
        a[i] = 0;
    }
}

console.log(`countBelowZeroEls = ${countBelowZeroEls}`);
console.log(arrayElBelowZero);
console.log(arrayIndexesElBelowZero);
console.log(a);

