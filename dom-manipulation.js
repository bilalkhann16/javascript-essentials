//single elements
const form = console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'))

//multiple elements
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));

const ul = document.querySelector('.items');
ul.lastElementChild.remove();