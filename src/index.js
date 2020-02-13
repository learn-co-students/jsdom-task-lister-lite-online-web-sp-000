document.addEventListener("DOMContentLoaded", function() {

  const taskInput = document.querySelector("#new-task-description")
  const durationInput = document.querySelector("#new-task-duration")
  //grabs user input for task and duration
  const taskForm = document.querySelector("#create-task-form")
  //grab form
 taskForm.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log("test")
    const newItem = [`Task: ${taskInput.value} Duration: ${durationInput.value}`]
    const myList = document.querySelector("#tasks")
    const newLine = document.createElement('li')
    newLine.innerText = newItem
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete Task'
    myList.appendChild(newLine)
    newLine.appendChild(deleteButton)
    deleteButton.addEventListener('click', function(e) {
    newLine.remove()
    e.preventDefault()
  })

  taskForm.reset()

  })

});