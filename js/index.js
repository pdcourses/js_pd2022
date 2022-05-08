// циклы for , while

/*
for (начальное условие; конечное условие;  шаг ) {
    дейсвие
}

*/

// Задача. посчитать сумму чисел от 1 до 10

let start = 1, end = 10, result = 0;


for(start = 0; start <= end; start = start+2){
    result = result + start;
    console.log(result);
}
console.log(result);


// for(start = 0; start <= end; start++){}

// for(start; start <= end; start++){}

/*
result = ;1+2+3+4+5+6+7+8+9+10

result = result + start;
start ++;
result = result + start;
start ++;
result = result + start;
start ++;
result = result + start;
start ++;
result = result + start;
start ++;
result = result + start;
start ++;
result = result + start;
start ++;
result = result + start;
start ++;
result = result + start;
start ++;
result = result + start;
*/


// вывести число от 1 до 10
let i;
for (i=1; i<=10; i++){
    console.log(i);
}

// вывести число от 10 до 1
for (i=10; i>=1; i--){
    console.log(i);
}