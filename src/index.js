document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", addToList);
});

const userInput = document.getElementById("new-task-description");
const tasks = document.getElementById("tasks")

const addToList = event => { 
  event.preventDefault();
  const li = document.createElement("li"); 
  tasks.appendChild(li).innerText = userInput.value; 
  event.target.reset();
}