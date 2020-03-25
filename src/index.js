document.addEventListener("DOMContentLoaded", () => {
  
});

document.addEventListener("submit", (event) => {
  event.preventDefault()
  let input = document.getElementById("new-task-description").value
  let listItem = document.createElement("li")
  listItem.innerText = input
  let tasks = document.getElementById("tasks")
  let add = tasks.appendChild(listItem)
});