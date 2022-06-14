//functions
function addNums(num1,num2){
    console.log(num1+num2);
    return num1+num2
}
const add_num = addNums(3,4)
console.log(add_num)

// //ES6
const addNumbers = (num1,num2) => {
    console.log(num1+num2);
    return num1+num2;  //don't need to return, alternative is to simply add!
}
console.log(addNumbers(5,5));

//older methods to create the classes.
function Person(firstName,lastName,dob){
    this.firstName = firstName;
    this.lastName = lastName;
    // this.dob = dob;
    this.dob = new Date(dob); 
}

Person.prototype.getFullName = function(){
    return this.firstName + this.lastName;
}
const person1 = new Person('John','Doe','4-3-1980');
console.log(person1)
console.log(person1.getFullName());


//ES6 Classes.
class Person{
    constructor(firstName,lastName,dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getFullName(){
        return this.firstName;
    }
}

const person1 = new Person('John','Doe','4-3-1980');
const person2 = new Person('Bilal','Khan','4-3-1980');

console.log(person2)
console.log(person1.getFullName())
