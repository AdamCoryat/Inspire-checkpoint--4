import todoService from "../Services/TodoService.js";
import { ProxyState } from "../AppState.js";

//TODO Create the draw function
function _drawTodos() {
  let template = "";
  ProxyState.todos.forEach((t) => (template += t.taskTemplate));
  document.getElementById("task").innerHTML = template;
}

export default class TodoController {
  constructor() {
    ProxyState.on("todos", _drawTodos);
    todoService.getTodos();
  }

  getTodos() {
    try {
      todoService.getTodos();
    } catch (error) {
      console.error(error);
    }
  }

  addTask(e) {
    e.preventDefault();
    let form = e.target;
    let newTask = {
      description: form.task.value,
    };
    form.reset();
    try {
      todoService.addTask(newTask);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * This method takes in an id of the Todo that should be togggled as complete
   * @param {string} todoId
   */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId
   */
  removeTask(id) {
    try {
      todoService.removeTask(id);
    } catch (error) {
      console.error(error);
    }
  }
}
