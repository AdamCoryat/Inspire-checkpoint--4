import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import Todo from "../Models/Todo.js";

// TODO you will need to change 'YOURNAME' to your actual name or all requests will be rejected
let url = "adamcoryat/todos/";

class TodoService {
  async getTodos() {
    let res = await api.get(url);
    console.log(res);
    ProxyState.todos = res.data.data.map((t) => new Todo(t));
  }

  async addTask(task) {
    let res = await api.post(url, task);
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data.data)];
  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find((todo) => todo.id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    let res = await api.put(url + todoId, todo);
    //TODO how do you trigger this change
  }

  async removeTask(id) {
    debugger;
    console.log(id);
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
