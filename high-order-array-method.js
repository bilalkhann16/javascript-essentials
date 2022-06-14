//High order Array methods
const todoText = todos.filter(function(todo){
    return todo.id === 1;
}).map(function(todo){
    return todo.text;
})

const todoTextt = todos.filter(function(todo){
    return todo.id === 1;
});

const todoText1 = todos.map(function(todo){
    return todo.text
});
console.log(todoText1)


todos.forEach(function(todo){
    console.log(todo.text);
});
