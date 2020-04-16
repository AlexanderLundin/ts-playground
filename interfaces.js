// tsc interfaces.ts -w
// can be refactored as an interface
function showToDo(todo) {
    console.log(todo.title + ' ' + todo.text);
}
var myTodo = { title: 'Trash', text: 'Take out trash' };
showToDo(myTodo);
function showToDoWithInterface(todo) {
    console.log(todo.title + ' ' + todo.text);
}
showToDoWithInterface(myTodo);
