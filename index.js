document.addEventListener("DOMContentLoaded", () => {
  // grab all the necessary DOM elements
  // form and all the relevant input fields
  const createTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");
  
  // ul where the taks will live
  const tasksUl = document.getElementById("tasks");
  
  // attach event listeners
  createTaskForm.addEventListener("submit", createNewTask = event => {
    // Stop form from submitting
    event.preventDefault();
    
    const newTask = document.createElement("li");
    newTask.innerText = newTaskDescription.value;

    addNewTask(newTask);
    addTaskPriority(newTask)

    // reset the form
    event.target.reset();

  });


  const addNewTask = task => {
    tasksUl.appendChild(task);
  }

  const addTaskPriority = task => {
    if (newTaskPriority.value === "High") {
      task.style.color = 'red';
    } else if (newTaskPriority.value === "Medium") {
      task.style.color = 'yellow';
    } else if (newTaskPriority.value === "Low") {
      task.style.color = 'green';
    }
    
  }

});
