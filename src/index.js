document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form');
  form.reset()
  form.addEventListener('submit', addElementToTodoList)
});

function addElementToTodoList(event) {

  event.preventDefault()
  
  addTask()

  let form = document.getElementById('create-task-form');
  form.reset()
}

function addTask() {
  let input = document.getElementById('new-task-description').value;
  let ul = document.getElementById('tasks');
  
  if (input != "") {
    let li = document.createElement('li')
    let button = document.createElement('button')
    button.innerHTML = 'X'
    button.setAttribute('data-description', input)
    button.addEventListener('click', removeTask)
    li.innerHTML = input
    li.appendChild(button)
    ul.appendChild(li)
  } 
}

function removeTask(e) {
  e.target.parentElement.remove()
}



