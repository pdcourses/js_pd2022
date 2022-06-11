/*
try{
    COLOR;
    // your  code
} catch(error){
    console.error('Your error: ',error);
    //console.log(error.name);
    //console.log(error.message);
}
console.log('hello');

*/
/*
COLOR;
// your  code
console.log('hello');
*/


function divTwoNumber(a,b){
    try{
        if(b == 0){
            throw new Error('Second number must be not zero');
        }
    } catch(e){
        return 0;
    }
    return a/b;
}

console.log(divTwoNumber(20,10));

console.log(divTwoNumber(-120,10));

console.log(divTwoNumber(20,0));

console.log('Hello');

/*
class RangeValidator
fileds : from , to
methods: 
1. range - вернет массив стартовый limit и конечный limit  [5,12]
2. validate - проверяет входит ли число в єтот диапазон

 RangeValidator(5,12);
 validate(8)


 RangeValidator(12,5);   --- > RangeValidator(5,12);

*/


class RangeValidator {
    constructor(from, to) {
        if(Number.isNaN(from) || !Number.isFinite(from)){
            throw new Error('Error. Number TO is wrong');
        }
        if(Number.isNaN(to) || !Number.isFinite(to)){
            throw new Error('Error. Number FROM is wrong');
        }
        this.from = from;
        this.to = to;
    }
    range() {
        if(this.from > this.to) {
            let copy_from = from;
            this.from = this.to;
            this.to = copy_from;
        }
        return [this.from. this.to];
    }
    validate(value){
        if(value >= this.from && value <= this.to) return true;
        return false;
    }
}



function f(value){
    if(!Number.isNaN(value) && Number.isFinite(value) && value != 0){
        // some code
    } else {
        throw new Error('Wrong value');
    }
}
