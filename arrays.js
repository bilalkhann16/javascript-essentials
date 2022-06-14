// Arrays
const fruits = ['apples','banana','1',3,5.5]
console.log(fruits[1])
fruits.push('mangoes');
console.log(fruits)
fruits.pop()
console.log(fruits)

//object strings
const person = {
    firstName: 'Bilal',
    lastName: 'Khan',
    age: 21,
    address:{
        city: "ISL",
        country: "PK"
    }
}

console.log(person.firstName);
console.log(person.address.city);

person.email = 'johndoe@gmail.com';
console.log(person)

const todos = [
    {
        id: 1,
        text: "take out trash"
    },
    {
        id: 2,
        text: "javascript is very easy"
    },
    {
        id: 3,
        text: "just hello world things."
    }
]
console.log(todos[0].text)

const todoJSON = JSON.stringify(todos)
console.log(todoJSON)
