document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", createNewTask);
});

function createNewTask(event) {
  event.preventDefault();
  const ulInput = document.getElementById("tasks");
  const formInput = document.getElementById("new-task-description");
  const userValue = formInput.value;
  const insertElement = document.createElement('li'); 
  insertElement.innerText = userValue;
  ulInput.appendChild(insertElement);
};


