document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById('create-task-form');
  form.onsubmit = submit;

  function submit(event) {  
    const newTask = document.getElementById('new-task-description').value;
    const node = document.createElement("LI");
    document.getElementById("tasks").appendChild(node).innerHTML = newTask;
    event.preventDefault();
  }
  
});
