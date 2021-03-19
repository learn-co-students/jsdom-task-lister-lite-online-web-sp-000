document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener("submit", function(e){
    e.preventDefault()
    let taskText = document.getElementById("new-task-description")
    let list = document.getElementById("tasks")
    let newTask = document.createElement("li")
    newTask.innerText = taskText.value
    list.appendChild(newTask)
  })
});


