document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const listenForForm = document.getElementById("create-task-form");
    // attach event listener on submit
    listenForForm.addEventListener("submit", createNewTask);

});

const createNewTask = event => {
  
  
  event.preventDefault();

 
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");

  newTask.textContent = newTaskDescription.value;

  appendNewTask(newTask);

  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};
