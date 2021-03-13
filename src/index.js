document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", addToDo);
});

const userInput = document.getElementById("new-task-description");
const tasks = document.getElementById("tasks")

const addToDo = event => { 
  event.preventDefault();
  const li = document.createElement("li"); 
  tasks.appendChild(li).innerText = userInput.value; 
  event.target.reset();
}
