document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', onSubmit)
});

function onSubmit(event){
  event.preventDefault()
  const newTask = document.querySelector('input').value
  let newLi = document.createElement('li')
  newLi.innerHTML = `
  <a class="edit-task" href="#">${newTask}</a>
  <button class="delete-task">x</button>
  `
  document.querySelector('#tasks').appendChild(newLi)
  document.querySelector('input').value = ""
  newLi.querySelector('.delete-task').addEventListener("click", deleteTask)
  newLi.querySelector('.edit-task').addEventListener("click", editTask)
}

function deleteTask(e){
  e.preventDefault()
  this.parentElement.remove()
}

function editTask(e){
  e.preventDefault()
  this.parentElement.children[0].style.backgroundColor = "yellow"
  document.querySelectorAll('input')[1].value = "Edit Task"
  document.querySelector('input').value = this.innerText
  this.parentElement.classList.add("editing")
  document.querySelector('form').removeEventListener('submit', onSubmit)
  document.querySelector('form').addEventListener('submit', onSubmitToEdit)
}

function onSubmitToEdit(e){
  e.preventDefault()
  const li = document.querySelector('.editing')
  const editedTask = document.querySelector('input').value
  li.innerHTML = `
    <a class="edit-task" href="#">${editedTask}</a>
    <button class="delete-task">x</button>
  `
  li.querySelector('.delete-task').addEventListener("click", deleteTask)
  li.querySelector('.edit-task').addEventListener("click", editTask)
  document.querySelector('form').addEventListener('submit', onSubmit)
  document.querySelectorAll('input')[1].value = "Create New Task"
  document.querySelector('input').value = ""
}
