document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form")

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTask()
  })
});

function addTask(){
  let tasks = document.getElementById("tasks")
  let task = document.getElementById("new-task-description").value
  let newTaskLi  = document.createElement("li")

  let newTask = tasks.appendChild(newTaskLi)
  newTask.innerHTML = task
}
