export default class Todo {
  constructor({ completed, _id, description }) {
    this.completed = completed;
    this.id = _id;
    this.description = description;
  }

  //NOTE work on the hamburger button for delete task. will use this in the clock mode to change to 12hr as well.
  get taskTemplate() {
    return `
<li class="tran-bg text-light">${this.toggleChecked}  ${this.description}          <span class="pointer" onclick="app.todoController.removeTask('${this.id}')"><i class="fa fa-recycle" aria-hidden="true"></i></span></li>`;
  }

  get toggleChecked() {
    if (this.completed == true) {
      return `<input class="pointer" type="checkbox" name="completed" id="checkbox" checked onclick="app.todoController.toggleTaskStatus('${this.id}')">`;
    } else {
      return `<input class="pointer" type="checkbox" name="completed" id="checkbox" onclick="app.todoController.toggleTaskStatus('${this.id}')">`;
    }
  }
}
