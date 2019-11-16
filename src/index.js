document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form")
  const taskItemUl = document.getElementById("tasks")
  taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const taskInput = document.getElementById("new-task-description")
    const newTask = document.createElement("li");
    newTask.innerText = taskInput.value
    taskItemUl.appendChild(newTask)
    debugger;
  })  
  
});
