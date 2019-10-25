document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");
  const taskUl = document.getElementById("tasks");

  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    taskUl.append(newTaskDescription.value);
    console.log(e.value)
    // $("#tasks")
    e.target.reset();
  });


});
