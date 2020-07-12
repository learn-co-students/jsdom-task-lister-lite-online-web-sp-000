document.addEventListener("DOMContentLoaded", () => {
    //grab all the necessary DOM elements
  
    //form and relevant input fields
    const newTaskForm = document.getElementById("create-task-form");
    let newTaskDescription = document.getElementById("new-task-description");
    let newTaskPriority = document.getElementById("new-task-priority");
  
    //ul where new tasks will live on the DOM
    let newTaskUl = document.getElementById("tasks");
  
    //attach event listeners
    newTaskForm.addEventListener("submit", createNewTask);
  });
  
  let createNewTask = event => {
    event.preventDefault();
    //stop form from trying to submit
    let newTaskDescription = document.getElementById("new-task-description");
    let newTask = document.createElement("li");
    newTask.innerText = newTaskDescription.value;
  
    let appendNewTask(newTask);
    event.target.reset();
  };
  
  let appendNewTask = task => {
    document.getElementById("tasks").appendChild(task);
  };