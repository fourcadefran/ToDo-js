import './styles.css';
import { ToDo, ToDoList } from './classes';
import { crearTodoHtml } from './js/componentes';



export const todoList = new ToDoList();

todoList.todos.forEach( todo  => crearTodoHtml( todo ));


 console.log('todos', todoList.todos );
