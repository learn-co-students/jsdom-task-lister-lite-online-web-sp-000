document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById("create-task-form")
  const newTaskDescription = document.getElementById("new-task-description")
  const myToDoList = document.getElementById("tasks")

  newTaskForm.addEventListener("submit", submitDescription)

  function submitDescription(event) {
    event.preventDefault();
    const listItem = document.createElement("li")
    listItem.innerText = newTaskDescription.value
    myToDoList.appendChild(listItem);
    return false;
  }
});
