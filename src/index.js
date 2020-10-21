document.addEventListener("DOMContentLoaded", () => {
  // need user input
  const taskDescription = document.querySelector("#new-task-description")
  // console.log(taskDescription)
  // pull the value after the submit button clicked by the user
  // need the form
  const taskForm = document.querySelector("#create-task-form")
  // console.log(taskForm)
  // listen to when the form is submitted
  taskForm.addEventListener('submit', function(e) {
    e.preventDefault() // prevent the default form submit
    // console.log('test') // always test your code
    const newTask = taskDescription.value
    // add to list
    const list = document.querySelector("#tasks")
    const newLi = document.createElement('li')
    newLi.innerText = newTask
    list.appendChild(newLi)
  })
});
