document.addEventListener("DOMContentLoaded", () => {

  const taskDesc = document.querySelector("#new-task-description")
  const taskForm = document.querySelector("#create-task-form")
  
  taskForm.addEventListener("submit", function (e) {
    e.preventDefault()
    const newTask = taskDesc.value

    const list = document.querySelector("#tasks")
    const newLi = document.createElement('li')
    newLi.innerText = newTask

    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'x'


    list.appendChild(newLi)
    newLi.appendChild(deleteButton)
    deleteButton.addEventListener("click", function(e) {
      newLi.remove()
    })
    taskForm.reset() 
  })
});
