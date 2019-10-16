document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('create-task-form').addEventListener("submit", function(event){
    console.log("hit")
    let input = document.getElementById("new-task-description").value;
    let tasks = document.getElementById("tasks");
    let li = document.createElement("li");
    li.innerHTML = input;
    tasks.append(li);
    //li.innerHTML = input;
    event.preventDefault(); return false;
  });


})
