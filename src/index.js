document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let createTask = document.getElementById('create-task-form')
  let submit = document.querySelector("input[type=submit]")

  createTask.addEventListener('submit', function(event) {
    addTask();
    event.preventDefault();
    resetInput();
  });

});

  function addTask() {
    let newTask = document.getElementById('new-task-description').value
    let list = document.getElementById('tasks')
    let line = document.createElement('li')

    let addLine = list.appendChild(line)
    addLine.innerHTML = newTask;
  } 

  function resetInput(){
    document.getElementById('new-task-description').value = ""
  }