document.addEventListener("DOMContentLoaded", function(event) {
  // your code here

  const createNewTask = function(event) {
    event.preventDefault();
    const newTask = document.createElement('li');
    newTask.innerText = document.getElementById('new-task-description').value;
    document.getElementById("tasks").appendChild(newTask);
  };

  document.getElementById("create-task-form").addEventListener('submit', createNewTask);  

  })