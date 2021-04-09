document.addEventListener("DOMContentLoaded", function() {
  
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");

  
  const newTaskUl = document.getElementById("tasks");

  
  newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = function(event) {
  event.preventDefault();
  
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = function(task) {
  document.getElementById("tasks").appendChild(task);
};