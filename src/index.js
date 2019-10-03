document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", function(e){
    let task = document.getElementById("new-task-description").value;
    let li = document.createElement("li")
    li.textContent = task;
    const task_list = document.getElementById("tasks");
    task_list.appendChild(li);
    e.preventDefault();
  });
});
