document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  // const list = document.getElementById("list");
  // const taskUl = document.getElementById("task");

  form.addEventListener("submit", function (event) {
    createNewTask();
    event.preventDefault();
    event.target.reset();
  });
  function createNewTask() {
    const taskUl = document.getElementById("task");
    const task = document.createElement("li");
    task.innerText = newTaskDescription.value;
    taskUl.appendChild(task);
  }
});
