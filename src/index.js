document.addEventListener("DOMContentLoaded", () => {

  let formSubmit = document.getElementById("create-task-form");
  let formInput = document.getElementById("new-task-description");
  let userTasks = document.getElementById("tasks");

  function createTask(submit) {
    submit.preventDefault();
    const newTask = document.createElement("li");
    newTask.innerText = formInput.value;
    userTasks.appendChild(newTask);
  }

  formSubmit.addEventListener("submit", createTask)

});
