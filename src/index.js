document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById('create-task-form').addEventListener("submit", function(event) {
    event.preventDefault();
    let listedTasks = document.getElementById('tasks');
    let newTask = document.getElementById('new-task-description').value;
    let node = document.createElement('li');
    
    node.innerText = newTask;
    listedTasks.appendChild(node);
  })
});
