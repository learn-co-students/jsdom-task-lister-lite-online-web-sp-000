document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const list = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    let newItem = document.createElement("li");
    newItem.innerText = taskInput.value;
    list.appendChild(newItem);
    taskInput.value = "";
  })
});
