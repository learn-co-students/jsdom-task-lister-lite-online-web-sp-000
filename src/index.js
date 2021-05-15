document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");
  
  
  taskForm.addEventListener("submit", function (event){
    event.preventDefault();
    const newTask = document.querySelector("#new-task-description").value;

    taskList.innerHTML += `<li> ${newTask}
    <button data-action = "delete"> X </button> </li>`;
    
    taskList.addEventListener("click", function (e) {
      if (e.target.dataset.action === "delete"){
        e.target.parentElement.remove();
      }
    })
    taskForm.reset(); 

  });
});
