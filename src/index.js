document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", function(e){
    let task = document.getElementById("new-task-description").value;
    let new_el = document.createElement("li")
    new_el.textContent = task;
    const taskList = document.getElementById("tasks");
    taskList.appendChild(new_el);
    e.preventDefault();
  });
});
