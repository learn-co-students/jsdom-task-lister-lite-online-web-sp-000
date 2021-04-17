document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById("create-task-form");
const newTaskDescription = document.getElementById("new-task-description");
const taskList = document.getElementById("tasks");

newTaskForm.addEventListener("submit", createNewTask);

function createNewTask(event) {
    console.log (event)
    event.preventDefault();
    const newTask = document.createElement("li");
    newTask.innerText = newTaskDescription.value;
    taskList.appendChild(newTask);
    event.target.reset();
  };

});
