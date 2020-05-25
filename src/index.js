document.addEventListener("DOMContentLoaded", () => {
   // your code here
   const newTaskForm = document.getElementById("create-task-form")
   const newTaskDescription = document.getElementById("new-task-description")
   const taskUl = document.getElementById("tasks")

   newTaskForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const taskLi = document.createElement("li")
      taskLi.innerText = newTaskDescription.value
      taskUl.append(taskLi);
   })
});
