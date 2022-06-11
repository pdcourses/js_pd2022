// parent class
class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} бежит со скоростью ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      console.log(`${this.name} стоит.`);
    }
  }
  // child class узконаправленная
 class Rabbit extends Animal {
    constructor(name) {
      super(name);
      this.name = name;
    }
    hide() {
      console.log(`${this.name} прячется!`);
    }
  };

  let Rex = new Animal("Rex");
  Rex.run(10);
  Rex.stop();

  let krolik = new Rabbit('Krolik');
  krolik.hide();  // личный метод свой
  krolik.run(2); // возможность от родителя
  krolik.stop()  // возможность от родителя


  /*
  User - класс родитель login, password
  Buyer - класс ребенок (наследник) tel, address
  Worker - дочерний класс  exp, salary, category
  */ 

  class User {
    constructor(login, password){
        this.login = login;
        this.password = password;
    }
    updatePassword(value){
        this.password = value;
    }
  }

  class Buyer extends User {
    constructor(login, password, telephone, address) {
      super(login, password); // contructor User
      this._telephone = telephone;
      this._address = address;
    }
    set telephone(value){
        this._telephone = value;
    }
    get telephone(){
        return this._telephone;
    }
    set address(value){
        this._address = value;
    }
    get address(){
        return this._address;
    }
    diliAddress() {
        return this.address+','+this.telephone;
    }
  }

  class Worker extends User{
    constructor(login, password, exp, salary, category){
        super(login, password);
        this.exp=exp;
        this.salary=salary;
        this.category=category;
    }
    infoWorder(){
        console.log(this.category, ':', this.salary);
    }
}

const worker1 = new Worker('workerlogin', '12345', 5, 1000, 'category1');
worker1.infoWorder();
worker1.updatePassword('admin');
console.log(worker1);

const buyer1 = new Buyer('buylogin', '12345', 'NY av New 64/15', '0951234578');
console.log(buyer1);
console.log(buyer1.diliAddress());


/*
User - login, pswd
Worder - 
Student , 


*/

