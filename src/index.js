document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form")
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    let text = document.getElementById("new-task-description").value
    
    let content = document.getElementById("main-content")
    let div = document.createElement("div")
    content.appendChild(div)
    div.textContent = text
   })
});
