// function to build a task li (child of tasks ul, contains inputted string and delete button)
// function to remove a task from the list
function newTask(content, color) {
  let newTaskElement = document.createElement("li");
  newTaskElement.textContent = content;
  newTaskElement.style.color = color;
  newTaskElement.appendChild(createButton());
  tasks.appendChild(newTaskElement);
}

function createButton() {
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.addEventListener("click", function(e) {this.parentElement.remove();});
  return deleteButton
}

document.addEventListener("DOMContentLoaded", () => {
  // grab the tasks ul & grab input
  const tasks = document.getElementById("tasks");
  const inputField = document.getElementById("new-task-description");
  const priority = document.getElementById("priority-color");

  document.getElementById("create-task-form").addEventListener("submit", function(event) {
    
    console.log(priority.value);
  
    newTask(inputField.value, priority.value);
    // reset the input field
    inputField.value = "";
    // prevent redirect
    event.preventDefault();

  });




});
