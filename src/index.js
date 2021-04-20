document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form')
  let submit = document.querySelector("input[type=submit")

  form.addEventListener('submit', function(event) {
    addNewTask();
    event.preventDefault();
    clearTask();
  });
});

  function addNewTask() {
  let task = document.getElementById('new-task-description').value
  let taskList = document.getElementById('tasks')
  let newLi = document.createElement('li')

  let newTask = taskList.appendChild(newLi)
    newTask.innerHTML = task;
  }

  function clearTask() {
    document.getElementById('new-task-description').value = ""
  }



