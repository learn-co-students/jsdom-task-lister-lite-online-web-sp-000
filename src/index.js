const taskForm = document.querySelector("#create-task-form"); 

const taskList = document.querySelector("#list"); 

taskForm.addEventListener("submit", function(e) {
  e.preventDefault(); 

  const newTask = document.querySelector("#new-task-description").value; 

  const taskItem = document.createElement("li"); 
  // debugger;

  taskItem.innerText = newTask;

  // appendChild slaps el on the dom 
  taskList.appendChild(taskItem); 
});