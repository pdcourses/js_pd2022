/*
Виды функции (3 вида):

1. function definition
function funName(param1, param2, param3, ...){
    return result;
}

2. function expression

const funName = function(param1, param2, param3, ...){
    return result;
}


3. arrow functions

const funName = (param1, param2, param3, ...) => {
    return result;
}


*/ 

function sum1(a){
    let res = 0;
    for(let i=0; i<a.length; i++){
        res += a[i];
    }
    return res;
}

const sum2 = function(a){
    let res = 0;
    for(let i=0; i<a.length; i++){
        res += a[i];
    }
    return res;
}

const sum3 = (a) => {
    let res = 0;
    for(let i=0; i<a.length; i++){
        res += a[i];
    }
    return res;
}

const funSumXY = (x,y) => {
    return x+y;
}
// сокращенная записать
const funSumXY = (x,y) => x+y;





