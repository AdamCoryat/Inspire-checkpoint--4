export default class Todo {
  constructor({ completed, _id, description }) {
    this.completed = completed;
    this.id = _id;
    this.description = description;
  }

  //NOTE work on the hamburger button for delete task. will use this in the clock mode to change to 12hr as well.
  get taskTemplate() {
    return `
<li class="tran-bg text-light">${this.toggleChecked}${this.description}</li> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent15"
    aria-controls="navbarSupportedContent15" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>`;
    //<button onclick="app.todoController.removeTask('${this.id}')">delete</button>;
  }

  get toggleChecked() {
    if (this.completed == true) {
      return `<input type="checkbox" name="completed" id="checkbox" checked onclick="app.todoController.toggleTaskStatus('${this.id}')">`;
    } else {
      return `<input type="checkbox" name="completed" id="checkbox" onclick="app.todoController.toggleTaskStatus('${this.id}')">`;
    }
  }
}
