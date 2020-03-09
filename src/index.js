document.addEventListener("DOMContentLoaded", () => {
  // your code here
  function addNewTask(event){
    event.preventDefault()
    const taskList = document.querySelector("ul#tasks")
  //Get the value of our task description input text box
  const newTaskInput = document.querySelector("#new-task-description")
  //create a new li that I will add eventually to my taskList ul
  const li = document.createElement("li")
  // Set my li's text content to my newTaskInput value and give it an extra space for buffer
  li.textContent = newTaskInput.value + " "
  }
  const form = document.querySelector("form")
  form.addEventListener("submit", addNewTask)

});
