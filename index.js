let task = document.getElementById('new-task-description');
document.querySelector('#create-task-form input[type=submit').addEventListener("submit", function(event) {
let toDo = document.getElementById('tasks')
  toDo.innerHTML = task.value
  event.preventDefault();
}, false);