document.addEventListener("DOMContentLoaded", () => {
  
  const newTaskForm = document.getElementById("create-task-form")
  const newTaskDescription = document.getElementById("new-task-description")
  const myToDosList = document.getElementById("tasks")

  newTaskForm.addEventListener("submit", submitDescription) 

  function submitDescription(event) {
    event.preventDefault();
    //add li element to ul with content from newTaskDescription
    const listItem = document.createElement("li")
    listItem.innerText = newTaskDescription.value
    myToDosList.appendChild(listItem);
    return false;
  }

  //on submit, add text from description form to "my todos" form
});
