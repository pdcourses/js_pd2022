/*
class User {
    constructor(login, password){
        this.login = login;
        this.password = password;
    }
    test(){
        console.log(this.login, ': ', this.password);
    }
    updatePassword(newPassword){
        this.password = newPassword;
    }
};

const obj1 = new User('vasya', 'qwerty');
obj1.test();
obj1.updatePassword('123dkrke1!-');
obj1.test();
*/

// Обновить поле или прочитать значение свойства
// get - получить , set - установить или обновить
/*
class User {
    constructor(login, password){
        this.login = login;
        this.password = password;
    }
    test(){
        console.log(this.login, ': ', this.password);
    }
    set password(value){
        this.password = value;
    }
    set login(value){
        this.login = value;
    }
    get password(){
        return this.password;
    }
    get login(){
        return this.login;
    }
};
*/
//id login pasword fullname ...
// 1001 'login1' 'qwertt' ........ 
// 1002 'vasya' 'qwertt' ........




class User {
    constructor(login, password, fullname = 'uknown'){
        this.fullname = fullname;
        this._login = login;
        this._password = password;
    }
    test(){
        console.log(this._login, ': ', this._password);
    }
    set password(password){
        this._password = password;
    }
    set login(login){
        this._login = login;
    }
    get password(){
        return this._password;
    }
    get login(){
        return this._login;
    }
};

let obj2 = new User('vasyalogin123', 'qwerty'); 
obj2.password = 'admin'; 
console.log(obj2.password);
obj2.test();

