document.addEventListener("DOMContentLoaded", () => {

  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const taskUl = document.getElementById("tasks");

  document.addEventListener('submit', function(e) {
    e.preventDefault();
    // create new task
      // declare a constant and assign it to an li with text 'newTaskDescription.value' (have to make a new li element)
    let newTask = document.createElement('li');
    newTask.innerText = newTaskDescription.value;
    taskUl.appendChild(newTask);

    e.target.reset();
  })
});