/*
1 Подсчитать сумму нечетных эелементов массива
2 Вывести индексы нулевых элементов массива
3 дано 2 массива. соединить и преобразовать в строку
4 отфильтровать масив, удалив все нули
*/

// a = [10,5,6,7,0,1,1,1,0,12]

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