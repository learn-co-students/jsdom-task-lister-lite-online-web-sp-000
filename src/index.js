document.addEventListener("DOMContentLoaded", function(event) {
  

  const createTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  

  createTaskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let taskInput = document.getElementById("new-task-description").value;
    let taskList = document.getElementById("tasks");
    let newTaskItem = document.createElement("li");
    newTaskItem.innerText = taskInput;
    taskList.appendChild(newTaskItem);
  });

});

