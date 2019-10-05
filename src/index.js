document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskList = new TaskList();

  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");

  const ul = document.getElementById("tasks");

  const renderApp = () => (ul.innerHTML = taskList.renderTasks())

  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault()
    taskList.createNewTask(newTaskDescription.value);
    e.target.reset();
    renderApp();
  });


});

class TaskList {
constructor() {
  this.tasks = [];
}

createNewTask(description) {
  const newTask = new Task(description);
  this.tasks.push(newTask);
}

renderTasks() {
  return this.tasks.map((task) => task.render()).join("");
}

class Task {
  constructor(description) {
    this.description = description;
  }

  render() {
    return `
      <li>
        ${this.description}
        <button data-description="${this.description}">X</button>
      </li>
      `;
  }
}
