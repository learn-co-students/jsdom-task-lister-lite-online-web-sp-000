document.addEventListener("DOMContentLoaded", () => {
  const newTaskDescription = document.getElementById('new-task-description')
  const createTaskForm = document.getElementById('create-task-form')

  createTaskForm.addEventListener("submit", createNewTask)
});


function createNewTask(event) {
  event.preventDefault();

  const newTaskDescription = document.getElementById('new-task-description')
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;
  // const deleteButton = document.createElement("button")
  // deleteButton.innerHTML = "X";
  addTaskToList(newTask);
  // addDeleteButton(deleteButton);
  event.target.reset();
  newTaskDescription.focus();
};

function addTaskToList(task) {
  document.getElementById('tasks').appendChild(task);
};

// function addDeleteButton(button) {
//   document.querySelector('li').appendChild(button);
// };
