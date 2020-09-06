export default class Todo {
  constructor({ completed, _id, description }) {
    this.completed = completed;
    this.id = _id;
    this.description = description;
  }

  get taskTemplate() {
    return `
<li class="tran-bg text-light">${this.toggleChecked}${this.description}</li><button onclick="app.todoController.removeTask('${this.id}')">delete</button>`;
  }

  get toggleChecked() {
    if (this.completed == true) {
      return `<input type="checkbox" name="completed" id="checkbox" checked onclick="app.todoController.toggleTaskStatus('${this.id}')">`;
    } else {
      return `<input type="checkbox" name="completed" id="checkbox" onclick="app.todoController.toggleTaskStatus('${this.id}')">`;
    }
  }
}
