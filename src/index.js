document.addEventListener("DOMContentLoaded", () => {
  
  const taskInput = document.querySelector("#new-task-description");
  //this is for inputing a description
  const taskForm = document.querySelector("#create-task-form");
 
  // adding an eventlistener so the user interacts with it.
  taskForm.addEventListener('submit', function(e) {
    e.preventDefault(); //this prevents the page from reloading
    
    const newTask = taskInput.value; // For each new task.
    //where do I want to add?
    //want to add to the list
    const list = document.querySelector('#tasks');
    const newLi = document.createElement('li');
    newLi.innerText = newTask;
    list.appendChild(newLi);
    taskForm.reset;
  });
  
});