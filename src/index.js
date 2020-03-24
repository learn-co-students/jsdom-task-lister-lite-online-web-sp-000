document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const newTaskDescription = document.getElementById('new-task-description');

  form.addEventListener("submit", function(event) {
    addNewTask();
    event.preventDefault();
    event.target.reset();
  });

  function addNewTask() {
    const taskUl = document.getElementById('tasks');
    const task = document.createElement('li');
    task.innerText = newTaskDescription.value;
    taskUl.appendChild(task);
  }

});
