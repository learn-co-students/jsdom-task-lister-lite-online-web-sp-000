document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let listOfTasks = document.getElementById("tasks");
    let task = document.getElementById("new-task-description").value;
    let node = document.createElement("li");
    node.innerText = task;
    listOfTasks.appendChild(node);

  })  
});

// const taskForm = document.getElementById("create-task-form")
// const taskItemUl = document.getElementById("tasks")
// taskForm.addEventListener("submit", function(event) {
//   event.preventDefault();
//   const taskInput = document.getElementById("new-task-description")
//   const newTask = document.createElement("li");
//   newTask.innerText = taskInput.value
//   taskItemUl.appendChild(newTask)
//   debugger;
// })  

// const taskForm = document.getElementById("create-task-form")
// taskForm.addEventListener("submit", function(event) {
//   event.preventDefault();
//   debugger;
// })  

// let hello = document.getElementById("create-task-form")
// hello.addEventListener("submit", function(event) {
//   debugger;
//   event.preventDefault();
//   let node = document.createElement("li");
//   let textnode = document.createTextNode("Water");
//   node.appendChild(textnode);
//   document.getElementById("tasks").appendChild(node);
// }