export default class Todo {
  constructor({ completed, _id, description }) {
    this.completed = completed;
    this.id = _id;
    this.description = description;
  }

  get taskTemplate() {
    return `<li class="tran-bg text-light"> <label class="custom-control custom-checkbox">${this.description}</li><button onclick="app.todoController.removeTask('${this.id}')">delete</button>`;
  }
}
