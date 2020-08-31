document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submit-btn").addEventListener("click", function(event){
    let newTask = document.getElementById("new-task-description");
    let taskList = document.getElementById("tasks");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(newTask.value));
    taskList.appendChild(li);    
    console.log(`Input is ${newTask.value}`);
    event.preventDefault()
  });
});


