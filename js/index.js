/*CLASS*/

// ООП

/*
фундамент - объект

class - класс для обьекта (не класс правила CSS)
сложный тип данных, то что описывает объект, набор свойств
очень похожа на шаблон
родитель для объектов
"паска"
"шаблон"
"станок"
*/

//{login: '', password: ''}
class User{
    //constructor - функция которая описывает создание будущих объектов
    // this - указатель на текущий объект
    // в качетсве параметра - примитив (число, строка..) [] {}
    constructor(loginValue, passwordValue){
        this.login = loginValue;
        this.password = passwordValue;
    }
    outObject(){
        console.log(this);
    }
};

// new - оператор для создания нового объекта
const user1 = new User('login1', 'qwerty');
const user2 = new User('superman', 'qwerty12345');
const user3 = new User('vasya-petrov', 'qwerty');

console.log('user#1: ',user1);
console.log('user#2: ',user2);
console.log('user#3: ',user3);

console.log('*****************');

user1.outObject();
user2.outObject();
user3.outObject();

//  класс машин
// модель, цвет, год выпуска, объект двигателя (модель, мощность)

class Engine{
    constructor(name, power){
        this.name = name;
        this.power = power;
    }
};

class Car{
    constructor(model, color, year, engine){
        this.model = model;
        this.color = color;
        this.year = year;
        this.engine = engine;
    }
};
const engine1 = new Engine('1234-12345677', 1000);
const car1 = new Car('modelX', 'black', 2022, engine1);
console.log(car1);
console.log(car1.model);
console.log(car1.engine);