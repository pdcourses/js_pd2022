/*
Фукнцию которая считает сумму отрицательных элементов массива

она должна использовать (вызвать) 2 функции
1 находит и возвращает отрицательные элементы массива
2 считает сумму массива
*/

function sumArray(a){
    let sum = 0;
    for(let i=0; i<a.lenght; i++ ){
        sum += a[i];
    }
    return sum;
}

function returnArrayElsBelowZero(a){
    // вернет набор элементов меньше нуля
    let result = [], j, i;
    for(i=0, j=0; i < a.lenght; i++ ){
        if(a[i] < 0 ){
            result[j] = a[i];
            j++;
        }
    }
    return result;
}


function sumElsBelowZero(array){
    /*
    let arrayEls = returnArrayElsBelowZero(array);
    let res = sumArray(arrayEls);
    return res;
    */
   return sumArray(returnArrayElsBelowZero(array));
}

console.log(sumElsBelowZero([1,2,-1,-5,0,3,-4,6]));

//***************** */
//Задание если число четное то умножить его на 2 (в виде функций)

function isEvenNumber(number){
    if(number%2 == 0) {return true};
    //else {return false};
    return false;
}

function task(number){
    //if(isEvenNumber(number) == true) {
    if(isEvenNumber(number)){
        number = number *2;
    }
    return number;
}

let res;
res = task(5);
console.log(res);
res = task(6);
console.log(res);


/*написать функцию которая вернет максимальный элемент массива*/
function maxElOfArray(array){
    let max = array[0];
    for(let i=0; i<array.lenght; i++){
        if(a[i] > max){
            max = a[i];
        }
    }
    return max;
} 

function minElOfArray(array){
    let min = array[0];
    for(let i=0; i<array.lenght; i++){
        if(a[i] < min){
            min = a[i];
        }
    }
    return min;
}

/*
[1,2,-1,-5,0,3,-4,6]
max = 1
i=0 1 max = 1
i=1 2 2>max yes! max =2
i=2 -1   -1> max -
i=3 -5    -5>max  -
i=4 0     0> max -
i=5 3    3>max  ++++ max=3
i=6 -4   -4>max (3) -
i=7 6   6>max(3)  +++ max = 6
max = 6

*/