document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form")
  taskForm.addEventListener("submit", function(event){
    event.preventDefault()

    let task = document.getElementById("new-task-description").value
    let list = document.getElementById("list")
    let newTask = document.createElement("li")
    let button = document.createElement("button")

    newTask.innerHTML = task
    list.appendChild(newTask)
    newTask.appendChild(button)
    taskForm.reset()
    

    button.innerHTML = "X"
    button.addEventListener("click", function(event){
      event.target.parentNode.remove()
    })
  })
});


