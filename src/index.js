
document.addEventListener("DOMContentLoaded", () => {
let form = document.getElementById("create-task-form")
    console.log("this is working",form)
  
    let textBox =  document.getElementById("new-task-description")
    
    let tasks = document.getElementById('tasks') 
    
    form.addEventListener("submit", function(event) {
      event.preventDefault()
      console.log("button clicked")
      let li = document.createElement("li")
      li.innerText = textBox.value    
      tasks.append(li)
    })
  });