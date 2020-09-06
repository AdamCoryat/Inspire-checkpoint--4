import todoService from "../Services/TodoService.js";
import { ProxyState } from "../AppState.js";

function _drawTasks() {
  let template = "";
  ProxyState.todos.forEach((t) => (template += t.taskTemplate));
  document.getElementById("task").innerHTML = template;
}

export default class TodoController {
  constructor() {
    ProxyState.on("todos", _drawTasks);
    todoService.getTasks();
  }

  getTasks() {
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

  toggleTaskStatus(id) {
    try {
      todoService.toggleTaskStatus(id);
    } catch (error) {
      console.error(error);
    }
  }

  removeTask(id) {
    try {
      todoService.removeTask(id);
    } catch (error) {
      console.error(error);
    }
  }

  toggleList() {
    let elem = document.getElementById("todo");
    let res = elem.classList.contains("invisible");

    if (res == true) {
      elem.classList.remove("invisible");
    } else if (res == false) {
      elem.classList.add("invisible");
    }
  }
}
