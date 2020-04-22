document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // form and relevant input fields
  const newTaskForm = document.getElementById("create-task-form");

  // add event listener
  newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = (event) => {
  event.preventDefault();
  // stop from trying to submit
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerHTML = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = (task) => {
  document.getElementById("tasks").appendChild(task);
};
