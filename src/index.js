document.addEventListener("DOMContentLoaded", () => {
  
let el = document.getElementById('create-task-form')
el.addEventListener('submit', submitTask)

function submitTask(e){
  let newTask = document.getElementById('new-task-description').value
  display(newTask);
  e.preventDefault();
  e.target.reset()
}

function display(task){
  let taskList = document.getElementById('tasks');
  let list = document.createElement('li');
  list.innerHTML = task
  taskList.appendChild(list)
  }



});