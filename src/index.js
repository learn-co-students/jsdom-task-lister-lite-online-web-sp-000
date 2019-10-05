
document.addEventListener("DOMContentLoaded", function(e) {
  
  const form = document.getElementById("create-task-form")
  
  let submitText = document.getElementById("new-task-description")
  let getUL = document.getElementById("tasks")
  let buttons = document.querySelectorAll("button")
  buttons.forEach(function(b) {
    b.addEventListener("click", function() {
      deleteMe()
    })
  })  
  
  form.addEventListener("submit", function() {
    event.preventDefault()
    addLiToDom()
    
    
  })
  
  function addLiToDom() {
    let createLI = document.createElement("li")
    
    createLI.innerHTML = submitText.value
   

    getUL.appendChild(createLI)
    submitText.value = ""
    
  }


})


