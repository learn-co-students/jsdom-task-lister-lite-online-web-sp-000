document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const createForm = document.querySelector("#create-task-form")

createForm.addEventListener("submit",createNewTask)

});

// By default, Form elements automatically submit the form, which redirects the browser to a new url. This is not the experience we want to build in this lab. We want to prevent that event from performing its default behavior (submitting the form), because we want to update the DOM using JavaScript

const createNewTask = event => {
  // this is how we define a function and store inside a variable
  event.preventDefault();
  // debugger

   const task = document.getElementById("new-task-description").value

   const li = document.createElement("li")
   li.innerText = task
   const ul = document.getElementById('tasks')
   ul.appendChild(li)

   event.target.reset()
}
