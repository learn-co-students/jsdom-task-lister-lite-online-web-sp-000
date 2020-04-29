document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskDescription = document.getElementById('new-task-description');

 function addTasks (event) {
   const task = document.createElement('li');

   task.textContent = taskDescription.value + " ";


   tasks.appendChild(task);

   taskDescription.value = " ";
   event.preventDefault();
 }


form.addEventListener("submit", addTasks, false);
});
