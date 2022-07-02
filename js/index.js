/*
class User{
    constructor(login, password){
        this.login = login;
        this.password = password;
    }

}
const user1 = new User('vasya10', 'qwerty');
*/

function User(login, password){
    this.login = login;
    this.password = password;
}

function Stud(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
}

const user1 = new User('vasya10', 'qwerty');
const stud1 = new Stud('Vasya', 'Ivanov', 20);

Stud.prototype = new User();

