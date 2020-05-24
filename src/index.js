document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById('create-task-form');
  const taskDescription = document.getElementById('new-task-description');
  const newTask = document.getElementById('tasks');

  taskForm.addEventListener('submit', createNewTask);

  function createNewTask() {
    event.preventDefault();
    const newTaskItem = document.createElement("li");

    newTaskItem.innerText = taskDescription.value;

    newTask.appendChild(newTaskItem);
    event.target.reset()
  }

});