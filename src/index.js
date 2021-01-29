document.addEventListener('DOMContentLoaded', function() {
  // your code here
  const newTaskForm = document.getElementById('create-task-form');
  const newTaskDescription = document.getElementById('new-task-description');
  const newTaskPriority = document.getElementById('new-task-priority');
  const newTaskUl = document.getElementById('tasks');

  newTaskForm.addEventListener('submit', createNewTask);
});

const createNewTask = function(e) {
  e.preventDefault();

  const newTaskDescription = document.getElementById('new-task-description');
  
  const newTask = document.createElement('li');
  newTask.innerText = newTaskDescription.value;
  appendNewTask(newTask);

  e.target.reset();
}

const appendNewTask = function(task) {
  document.getElementById('tasks').appendChild(task);
};