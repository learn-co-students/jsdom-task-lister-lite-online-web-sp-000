document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("create-task-form").addEventListener("submit", function(event){
    event.preventDefault()

    let task = document.getElementById("new-task-description").value
    let list = document.getElementById("list")
    let newTask = document.createElement("li")

    newTask.innerHTML = task
    list.appendChild(newTask)
  })
});
