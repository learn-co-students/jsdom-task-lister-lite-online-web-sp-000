document.addEventListener("DOMContentLoaded", () => {
  // get all necessary items 

  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");

  //ul where new tasks will live on the DOM
  const newTaskUl = document.getElementById("tasks");

  //Event listener for submit
  newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
  event.preventDefault(); //stops the form from doing the default action of submitting
  
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};

const editEachTask = event => {

}

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};

const appendNewPriority = priority => {
  document.getElementById("tasks").appendChild(priority);
};


// //Below code is from example source code
// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
//   document.getElementById("submit").addEventListener("click", function(event) {
//     // get the info from the textbox and create a new li 
//     let listItem = document.createElement("li")
//     let toDo = document.getElementById("new-task-description").value
//     let toDoContent = document.createTextNode(toDo)

//     // set priority 
//     let priority = document.getElementsByName("new-task-priority")
//     for(let i = 0; i < priority.length; i++) {
//       if (priority[i].checked) {
//         listItem.classList.add(priority[i].value)
//       }
//     }

//     // adding and handling 'done' button
//     let finished = document.createElement("input")
//     finished.value = "Done" 
//     finished.type = "submit"
//     finished.id = "done"

//     finished.addEventListener("click", function(event) {
//       this.parentElement.remove()
//       event.preventDefault()
//     })

//     // add the new task to the tasks ul
//     listItem.appendChild(toDoContent)
//     listItem.appendChild(finished)
//     document.getElementById("tasks").appendChild(listItem) 

//     // clear the text from the textbox 
//     document.getElementById("new-task-description").value = ""
//     event.preventDefault()
//   }, false)
// });