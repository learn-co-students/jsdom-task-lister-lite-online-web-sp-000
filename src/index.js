document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener("submit", function(e){
    e.preventDefault()
    let toDo = document.getElementById("new-task-description").value

    // document.getElementById("tasks")
    // tasks.innerHTML += "<li></li>"
    newItem = document.createElement("LI");
    newItem.innerHTML = toDo
    tasks.appendChild(newItem)

    
   

})

});
