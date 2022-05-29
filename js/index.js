/*
1 Подсчитать сумму нечетных эелементов массива
2 Вывести индексы нулевых элементов массива
3 дано 2 массива. соединить и преобразовать в строку
4 отфильтровать масив, удалив все нули
*/

// a = [10,5,6,7,0,1,1,1,0,12]

/*
function task1(a){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if(a[i]%2 != 0){
            sum = sum + a[i];
        }        
    }
    return sum;
}

function task2(a){
    let res=[],i,j;
    for(i=0,j=0; i<a.length; i++){
        if(a[i] == 0){
            res[j] = a[i];
            j++;
        }
    }
    return res;
}

function task3(a1, a2){
    let res = [];
    res = a1.slice(); // last index a1.length-1
    for(i=0, j=a1.length; i<a2.length; i++, j++){
        res[j]=a2[i];
    }
    return res.toString();
}

function task3_2(a1, a2){
    let s1,s2, res;
    s1 = a1.toString();
    s2 = s2.toString();
    res = s1 + s2;
    return res;
}

// отфильтровать масив, удалив все нули
// итоговый массив без нулей!
// собрать массив только тех кто не ноль
function task4(a){
    let res = [] , i, j;
    for(i=0, j=0; i<a.length; i++){
        if(a[i] !=0 ){
            res[j] = a[i];
            j++;
        }
    }
    return res;
}

*/

/*
//1-1
let a = [4,0,8,10,1,0,5,7,5,0,4,6];

//нечетное?
function isOdd(value) {
    return value%2 != 0;
  }
  
let res1 = a.filter(isOdd); //оставлю только нечетные 


function sum(accum, val) {
    return accum, val;
}

let res2 = res1.reduce(sum);
*/

/*
//1-2
let resOdd = a.filter(isOdd = (value) => value%2 == 1);
let resSum = resOdd.reduce(sumNum = (a, b) => a + b)
console.log(resSum);
*/


//1-3
//let sum = (a) => a.filter((el, i) => (el%2)).reduce((accum, val) => accum + val);

//1-4

let sum = (a) => {
    let res = 0;
    a.forEach((el) => {
        if(el%2 != 0) res += el;
    });
    return res;
};

// нечетный оставляю, а любой четный превращаю в ноль, а потом сумма с помощью reduce
let sum = (a) => a.forEach((el) => (el%2 != 0) ? el : 0).reduce((accum, val) => accum + val);

