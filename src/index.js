document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskForm = document.getElementById("create-task-form");
  newTaskForm.addEventListener('submit', addLi)
  function addLi(event)
  {
    event.preventDefault()
    newTaskDescription = document.getElementById("new-task-description"); 
    // one is for what we are making
    liNode = document.createElement("li")
    tasksNode = document.getElementById("tasks")
    txtNode = document.createTextNode(newTaskDescription.value)

    liNode.appendChild(txtNode);
    tasksNode.appendChild(liNode);
  }
  
});

