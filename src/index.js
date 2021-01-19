document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription= document.getElementById("create-task-description");
  const newTaskUl = document.getElementById("tasks");
  newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
  const newTaskDescription= document.getElementById("create-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;
  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task)
}
