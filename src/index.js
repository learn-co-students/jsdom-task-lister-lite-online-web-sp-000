document.addEventListener("DOMContentLoaded", () => {

  const taskInput = document.querySelector("#new-task-description")
  const taskForm = document.querySelector("#create-task-form")

  taskForm.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log('Submitted')
    const newTask = taskInput.value
    const userList = document.querySelector('#tasks')
    const newLi = document.createElement('li')
    newLi.innerText = newTask
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete Me'

    userList.appendChild(newLi)
    newLi.appendChild(deleteButton)

    deleteButton.addEventListener('click', function(e) {
    newLi.remove()
    e.preventDefault()
    })

    taskForm.reset()

  });

});
