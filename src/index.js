

const form = document.getElementById("create-task-form")
const description = document.getElementById("new-task-description")
const newTaskPriority = document.getElementById("new-task-priority")
const taskList = document.getElementById("tasks")

form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
  e.preventDefault()
  let newTask = description.value
  taskList.innerHTML += `
    <li>${newTask}</li>
  `

  description.value = ""
}


document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
