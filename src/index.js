document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  
  taskForm.addEventListener("submit", function(event) {
    event.preventDefault();
  
  const newTask = document.getElementById("new-task-description").value;
    taskList.innerHTML += `<li class="task">${newTask}</li>`
    taskForm.reset();
  });
});
