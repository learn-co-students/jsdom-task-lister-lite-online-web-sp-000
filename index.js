document.addEventListener("DOMContentLoaded", () => {
  // grab all the necessary DOM elements
  // form and all the relevant input fields
  const createTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");
  
  // ul where the taks will live
  const tasksUl = document.getElementById("tasks"); 


  // Create new tasks
  const createNewTask = event => {
    // Stop form from submitting
    event.preventDefault();
    
    const newTask = document.createElement("li");
    newTask.innerText = newTaskDescription.value;

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("data-description", newTaskDescription.value);
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', function () { newTask.remove(); });
    

    addNewTask(newTask);    
    addTaskPriority(newTask)
    addDeleteButton(newTask, deleteButton);

    // reset the form input
    event.target.reset();

  };

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
  
  const addDeleteButton = (task, button) => {
    task.appendChild(button);
  }

  // attach the event listener for tasks
  createTaskForm.addEventListener("submit", createNewTask);

});
