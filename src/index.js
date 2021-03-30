document.addEventListener("DOMContentLoaded", () => {
  let taskForm = document.querySelector("create-task-form")
  let newTask =  document.querySelector("new-task-description")
  
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("form submit", newTask.value)
  })
});
