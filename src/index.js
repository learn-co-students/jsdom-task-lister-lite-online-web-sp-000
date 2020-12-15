document.addEventListener("DOMContentLoaded", () => {
  newTask()
});

function newTask() {
  document.getElementById("create-task-form").addEventListener("submit", function(event) {
  event.preventDefault();
    let task = document.querySelector("#new-task-description");
    let li = document.createElement('li');
    li.textContent = task.value;
    document.getElementById('tasks').appendChild(li);
  });
  document.getElementById("create-task-form").reset();
}
