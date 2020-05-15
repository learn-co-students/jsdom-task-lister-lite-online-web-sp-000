document.addEventListener("DOMContentLoaded", () => {
  // your code here
})

const form = document.getElementById("create-task-form")
let todos = document.getElementById("tasks")
const newTaskDescription = document.getElementById("new-task-description")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  let element = document.createElement('li')
  element.innerHTML = newTaskDescription.value
  todos.appendChild(element)
  e.target.reset()
  })

