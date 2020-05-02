document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form');

  let taskDescription = document.getElementById('new-task-description');

 function addTasks (event) {
   const item = document.createElement('li');
   item.textContent = taskDescription.value;
   tasks.appendChild(item);
   event.preventDefault();
 }
form.addEventListener("submit", addTasks, false);
});


function removeTasks() {
  let list = document.getElementById("tasks");
  list.removeChild(list.childNodes[0]);
  }
