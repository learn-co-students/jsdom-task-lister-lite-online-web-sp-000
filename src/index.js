document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById('create-task-form').addEventListener('submit', function(event){
    event.preventDefault();

    let task = document.getElementById('new-task-description').value 
    let element = document.createElement("li")
    element.innerHTML = `${task} <button data-description="${task}">X</button>`
    let list = document.getElementById("tasks")
    list.appendChild(element)
    
  })
});

