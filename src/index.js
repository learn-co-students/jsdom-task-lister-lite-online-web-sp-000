document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("#create-task-form").addEventListener("submit", function(event) {
    event.preventDefault();
    addListItem();
  });

  let newTaskDescription = document.getElementById("new-task-description");
  let tasks = document.getElementById("tasks");

  function addListItem(){
    let newTask = document.createElement("li");
    newTask.textContent = newTaskDescription.value;
    tasks.appendChild(newTask);
  }
});
