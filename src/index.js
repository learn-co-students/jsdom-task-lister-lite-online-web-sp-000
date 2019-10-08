document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById("create-task-form");
    const newTaskDescription = document.getElementById("new-task-description");
    const newTaskPriority = document.getElementById("new-task-priority");

    // grab the ul where new tasks will live on the DOM
    const newTaskUl = document.getElementById("tasks");

    // attach event listener on submit
    newTaskForm.addEventListener("submit", createNewTask);

});

const createNewTask = event => {
  event.preventDefault();

  //stop form from trying to submit
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");

  newTask.textContent = newTaskDescription.value;

  appendNewTask(newTask);

  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};
