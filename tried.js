//main.js code pasted for the future revision.

//var, let, const
let age = 30;
age = 31;
console.log(age);

// String, Numbers, Boolean, null, undefined
const name = 'Bilal';
const age = 21;
const isTrue = true;
const gpa = 3.14
let z;

console.log(typeof gpa)

//concatenation
console.log("My name is: "+ name);
//template string
console.log(`my age ${age}`)

//string manipulation
const s = 'hello world';
console.log(s.substring(0,4))

const s = 'technology,computers,it,code';
console.log(s.split(','));

// Arrays
const fruits = ['apples','banana','1',3,5.5]
console.log(fruits[1])
fruits.push('mangoes');
console.log(fruits)
fruits.pop()
console.log(fruits)
