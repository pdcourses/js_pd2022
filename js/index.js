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

/*
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

function sumElsArray(a){
    let sum = 0;
    for(let i=0; i< a.length; i++){
        sum += a[i];
    }
    return sum;
}

let a1 = [1,2,3,4,5], a2 = [10,20,30], a3 = [-4, 2, 0, 3.14, 15];
let result;
result = sumElsArray(a1);
console.log(result);
result = sumElsArray(a2);
console.log(result);
result = sumElsArray(a3);
console.log(result);


// прошлое задание сделать функцией
// принять массив , вернуть массив у которого отрицательные элементы 
// превратились в ноль

function task1(array){
let countBelowZeroEls  = 0, arrayElBelowZero = [], arrayIndexesElBelowZero = [] ;
for(let i=0; i<array.length; i++){
    if( array[i] < 0){
        arrayElBelowZero [countBelowZeroEls] = array[i];
        arrayIndexesElBelowZero [countBelowZeroEls] = i;
        countBelowZeroEls++;
        array[i] = 0;
    }
}
console.log(`countBelowZeroEls = ${countBelowZeroEls}`);
console.log(arrayElBelowZero);
console.log(arrayIndexesElBelowZero);
return array; 
}

result = task1(a);
console.log(result);
result = task1([1,2,3,4,5]);
console.log(result);


let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  let matrix2 = [
    [1, 2, 3, 4],
    [4, 5, 6 , 0]
  ];

console.log(matrix);
console.log(matrix2);


console.log(matrix[0][0]);
console.log(matrix[0][2]);
console.log(matrix[1][2]);
console.log(matrix[2][2]);
*/
/*
Задания
1. написать функцию которая возвращает все элементы массива не 
превышающие заданный порог
2. написать функцию которая вернет квадраты элементов заданного массива
1 2 3 4 5
1 4 9 16 25
3. написать функцию которая вернет сумму положительных элементов массива
4. * вернуть обратный массив (развернуть массив наоборот)
*/

function arrayTask1(array, limit){
    let result = [], i, j=0;
    for(i=0; i<array.length; i++){
        if(array[i] <= limit){
            result[j] = array[i];
            j++;
        }
    }
    return result;
}

function arrayTask2(array){
    for(let i=0; i<array.length; i++){
        array[i] = array[i] ** 2;
    }
    return array;
} 

function arrayTask3(array){
    let result =0;
    for(let i=0; i<array.length; i++){
        if(array[i] > 0){
            result += array[i];
        }
    }
    return result;
} 

function arrayTask4(array){
    let res  = [];
    for(let i=array.length-1, j=0; i>=0;  i--, j++){
        res[j] = array[i];
    }
    return res;
}
/*
function arrayTask4(array){
    let res  = [];
    for(let i=0, j=array.length-1; i < array.length;  i++, j--){
        res[j] = array[i];
    }
    return res;
}
*/


let a= [8,2,12,5,50,60,2,-1,10,11], res;
res = arrayTask1(a, 10);
console.log(a);
console.log(res);
res = arrayTask2(a);
console.log(res);
res = arrayTask3(a);
console.log(res);
res = arrayTask4(a);
console.log(res);




