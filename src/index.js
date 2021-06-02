document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const newTask = document.getElementById('tasks')
  form.addEventListener('submit', function(event){
    event.preventDefault();
    const task = document.getElementById('new-task-description').value;
    newTask.innerHTML += `<li> ${task} </li>`;
  });
});

