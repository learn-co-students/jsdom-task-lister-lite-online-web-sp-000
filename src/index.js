document.addEventListener("DOMContentLoaded", () => {
  const submitform = document.getElementById("create-task-form")
  const list = document.getElementById('tasks')
  submitform.addEventListener("submit", function(event) {
    let newTask = document.createElement("li");
    newTask.innerText = document.getElementById('new-task-description').value;
    list.appendChild(newTask);
    event.preventDefault();
}, false);
  // your code here
});
