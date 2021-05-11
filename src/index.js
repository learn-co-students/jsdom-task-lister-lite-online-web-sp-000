document.addEventListener("DOMContentLoaded", () => {
  addTask();
});

const createTaskForm = document.getElementById("create-task-form");
const newTaskDescription = document.getElementById("new-task-description");

const tasks = document.getElementById("tasks");

function addTask() {
  createTaskForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let li = document.createElement('li');
    let newTask = tasks.appendChild(li).innerHTML = newTaskDescription.value + " <button>X</button>";
    e.target.reset();
  });
}

function deleteTask(element) {
  element.parentElement.remove();
}

tasks.addEventListener("click", function(e) {
  if (e.target.nodeName === "BUTTON") {
    deleteTask(e.target);
  }
})