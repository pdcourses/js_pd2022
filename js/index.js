/*
1 Подсчитать сумму нечетных эелементов массива
2 Вывести индексы нулевых элементов массива
3 дано 2 массива. соединить и преобразовать в строку
4 отфильтровать масив, удалив все нули
*/

// 1
//forEach(el index) if a[i]  == 0 ??? push index in res arrray
// push - добавляет єлемент в конец

let nullIndexes1 = (arr) => {
    let res = [];
    arr.forEach((el, index) => {
        if(el == 0) res.push(index);
    });
    return res;
}

//2
// filter если ноль а потом пушим в новый

let nullIndexes2 = (arr) => {
    let res = [];
    arr.filter((el, index) => {
        if(el == 0) res.push(i);
    });
}

//task4
// все элементы не нолевые
let task4 = (arr) => arr.filter(el => el!=0);

//task3
let task3_1 = (arr1, arr2) => arr1.toString()+arr2.toString();

let task3_2 = (arr1, arr2) => arr1.toString().concat(arr2.toString());

let task3_3 = (arr1, arr2) => arr1.concat(arr2).toString();
