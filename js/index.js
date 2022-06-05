const ROLES = Object.freeze({
    ADMIN: "ADMIN",
    MODERATOR: "MODERATOR",
    USER: "USER",     // ROLES.USER
});

const ACTIONS = Object.freeze({
    CREATE: 'CREATE',
    READ: 'READ',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
});

let accessMap = new Map();

accessMap.set(ACTIONS.CREATE, [ROLES.ADMIN, ROLES.MODERATOR]);
//accessMap.set(ACTIONS.READ, [ROLES.ADMIN, ROLES.MODERATOR, ROLES.USER]);
accessMap.set(ACTIONS.READ, Object.values(ROLES));
accessMap.set(ACTIONS.UPDATE, [ROLES.ADMIN, ROLES.MODERATOR]);
accessMap.set(ACTIONS.DELETE, [ROLES.ADMIN]);
console.log(accessMap);

console.log(Object.keys(ACTIONS));
console.log(Object.values(ACTIONS));
console.log(Object.entries(ACTIONS));


// копирование обьекта

const test1 = {name: 'Tom', surname: 'Fox'};

const test2 = test1;
console.log('--------------------');
console.log('test1 object=',test1);
console.log('test2 object=',test2);

test2.name = 'John';
console.log('--------------------');
console.log('test1 object=',test1);
console.log('test2 object=',test2);

const test3 = Object.assign({}, test1);
console.log('--------------------');
console.log('test1 object=',test1);
console.log('test2 object=',test2);
console.log('test3 object=',test3);

test3.name = 'Vasya';
console.log('--------------------');
console.log('test1 object=',test1);
console.log('test2 object=',test2);
console.log('test3 object=',test3);

/*
test1                               test3
{name: 'John', surname: 'Fox'}     {name: 'Vasya', surname: 'Fox'}
test2
*/

const {name, surname} = test3;
console.log(name, surname);

function fun1(obj){
    console.log(`Hello ${obj.name} ${obj.surname} !!!`);
}

function fun2({name, surname}){
    console.log(`Hello ${name} ${surname} !!!`);
}

const fun3 = ({name, surname}) => console.log(`Hello ${name} ${surname} !!!`);









