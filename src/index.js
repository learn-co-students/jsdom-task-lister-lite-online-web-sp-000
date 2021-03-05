document.addEventListener("DOMContentLoaded", () => {

  //initialize taskList class
  const taskList = new TaskList();

  // form and input fields 
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  //list of new tasks
  const newTaskList = document.getElementById("tasks");

  //attach event listeners
  // taskList prop exists in class TaskList.js. includes renderTasks 
  const renderApp = () => (newTaskList.innerHTML = taskList.renderTasks());

  newTaskForm.addEventListener("submit", (e) => {
     //stops form from submitting on load
     event.preventDefault();
     //createNewTask exists in taskList.js 
     taskList.createNewTask(newTaskDescription.value);
     // reset form 
     e.target.reset();
     renderApp();
  });

  //deleteTask exists in TaskList.js
  newTaskList.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      taskList.deleteTask(e.target.dataset.description);
      renderApp();
    }
  });



});
