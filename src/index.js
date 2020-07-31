document.addEventListener("DOMContentLoaded", () => {
  
  taskForm = document.getElementById("create-task-form");
  newTaskDescription = document.getElementById("new-task-description");
  taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let task = document.createElement("li");
    let insertLTaskList = taskList.appendChild(task)
    task.innerHTML = newTaskDescription.value
  }
  )

});
