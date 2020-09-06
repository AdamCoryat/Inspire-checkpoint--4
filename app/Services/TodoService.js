import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import Todo from "../Models/Todo.js";

let url = "adamcoryat/todos/";

class TodoService {
  async getTasks() {
    let res = await api.get(url);
    ProxyState.todos = res.data.data.map((t) => new Todo(t));
  }

  async addTask(task) {
    let res = await api.post(url, task);
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data.data)];
  }

  async toggleTaskStatus(id) {
    let todo = await ProxyState.todos.find((todo) => todo.id == id);
    if (todo.completed == false) {
      todo.completed = true;
      await api.put(url + id, todo);
    } else {
      todo.completed = false;
      await api.put(url + id, todo);
    }
    console.log(todo);
    ProxyState.todos = ProxyState.todos;
  }

  async removeTask(id) {
    let res = await api.delete(`adamcoryat/todos/${id}`);
    let index = ProxyState.todos.findIndex((t) => t.id == id);
    if (index == -1) {
      throw new Error("Invalid Id");
    }
    ProxyState.todos.splice(index, 1);
    ProxyState.todos = ProxyState.todos;
  }
}

const todoService = new TodoService();
export default todoService;
