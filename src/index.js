document.addEventListener("DOMContentLoaded", () => {
  
  let submitTask = document.getElementById("create-task-form");
  let userInput = document.getElementById("new-task-description");
  let taskList = document.getElementById("tasks")

  function generateTask(submit) {
    submit.preventDefault();
    const newItem = document.createElement("li");
    newItem.innerText = userInput.value;
    taskList.appendChild(newItem);
  }

  submitTask.addEventListener("submit", generateTask)

});