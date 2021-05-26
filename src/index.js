document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form#create-task-form");
  const taskList = document.querySelector("ul#tasks");
  const newTask = document.getElementById("new-task-description");
  let newTaskItem;

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    newTaskItem = document.createElement("li");
    newTaskItem.innerText = newTask.value;
    taskList.appendChild(newTaskItem);
    form.reset();
  })
});
