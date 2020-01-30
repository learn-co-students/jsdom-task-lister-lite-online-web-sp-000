document.addEventListener("DOMContentLoaded", () => {
  // your code here
   let e = document.getElementById('create-task-form').addEventListener("submit", function(event){
   event.preventDefault()

    let text = document.getElementById('new-task-description').value 
    let test = document.createElement("LI")
    let button = document.createElement("BUTTON")
    button.innerText = "X"
    let g = document.getElementById('tasks').appendChild(test)
    g.append(text)
    g.append(button)

    let del = document.getElementById('tasks').addEventListener("click", function(event) {
      event.target.parentElement.remove()
    
    })
  });
});
