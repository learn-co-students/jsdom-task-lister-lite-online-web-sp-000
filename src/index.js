document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("create-task-form")
    form.addEventListener("submit", function(event){event.preventDefault()
    let name = document.getElementById("new-task-description").value
    document.querySelectorAll("ul.tasks li").innerHTML = name
  })})
