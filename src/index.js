document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    let ul = document.getElementById("tasks");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(document.getElementById("new-task-description").value));
    ul.appendChild(li);
 });
});
