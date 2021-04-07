const form = document.getElementById("create-task-form");
const input = document.getElementById("new-task-description");
const tasks = document.getElementById("tasks");

document.addEventListener("DOMContentLoaded", () => {
  
  form.addEventListener("submit", function(event) {

    event.preventDefault(); 
  
    const li = document.createElement("li");
    li.innerText = input.value;
    tasks.appendChild(li);
    input.value = "";
  });

});