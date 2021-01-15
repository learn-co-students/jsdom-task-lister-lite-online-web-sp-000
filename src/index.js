document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let taskForm = document.getElementById("create-task-form");
  let newTaskDescription = document.getElementById("new-task-description");
  let list = document.getElementById("tasks");

taskForm.addEventListener("submit", function(e){
  e.preventDefault();
   addToList();
  });

function addToList(){
  if (newTaskDescription.value != ""){
    let newTask = document.createElement("li");
    let deleteButton = document.createElement("button")
    deleteButton.textContent = "X";
    newTask.textContent = newTaskDescription.value;
    newTask.appendChild(deleteButton);
    console.log(deleteButton);
    list.appendChild(newTask);
    newTaskDescription.value = "";
    deleteButton.addEventListener("click", function(){removeFromList(newTask)});
  }
}



function removeFromList(newTask){
newTask.parentElement.removeChild(newTask);
};

  console.log(taskForm);
});


