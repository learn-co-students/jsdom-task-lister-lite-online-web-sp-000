
  

const main = document.querySelector("#main-content")
console.log(main)

const taskForm = document.querySelector("#create-task-form")
const tasklist = document.querySelector("#tasks")


taskForm.addEventListener("submit", function(e)){
e.preventDefault()
 console.log("Event Default")
// have the user input
const newTask = document.querySelector("#new-task-description")
console.log(newTask).value
// put it to the document with the id of tasks
const taskItem = document.createElement("li")


});
