document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const createTaskForm = document.getElementById("create-task-form")
  const userInput = document.getElementById("new-task-description")
  const taskList = document.getElementById("tasks")
  
  createTaskForm.addEventListener('submit', 'submitTask')
  
  function submitTask(submit) {
    submit.preventDefault();
    const newItem = document.createElement("li");
    newItem.innerText = userInput.value;
    taskList.appendChild(newItem);
  }
  
  
});
