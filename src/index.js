document.addEventListener("DOMContentLoaded", () => {
  
  // We first assign different parts of our HTML to variables:
  let submitTask = document.getElementById("create-task-form"); // 1. Our form for entering a task 
  let userInput = document.getElementById("new-task-description"); // 2. Our user's input
  let taskList = document.getElementById("tasks") // 3. Our user's list of tasks

  // We then create a function that will handle the work of creating a user's task
  function generateTask(submit) {
    submit.preventDefault(); // 1. We use 'preventDefault' to make sure the default behavior of loading a new url is prevented
    const newItem = document.createElement("li"); // 2. We define and assign a variable an '<li>' element
    newItem.innerText = userInput.value; // 3. We set the text inside that '<li>' to the value of the input, in this case the entered text
    taskList.appendChild(newItem); // 4. We add out '<li>' element with text to our '<ul>' previously defined
  }

  submitTask.addEventListener("submit", generateTask)



});


