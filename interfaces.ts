// tsc interfaces.ts -w

// can be refactored as an interface
function showToDo(todo: {title:string, text:string}){
    console.log(todo.title+ ' ' + todo.text);
}

let myTodo = {title:'Trash', text: 'Take out trash'}
showToDo(myTodo);

// interface 
interface Todo{
    title: string;
    text: string;
}

function showToDoWithInterface(todo: Todo){
    console.log(todo.title+ ' ' + todo.text);
}
showToDoWithInterface(myTodo);
