document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let newTaskForm = document.getElementById("create-task-form");
  let taskList = document.getElementById("tasks");

  newTaskForm.addEventListener("submit", e => {
    let newTask = document.getElementById("new-task-description");
    e.preventDefault();
    console.log("Submit was Clicked...");
    let newListItem = document.createElement("li");
    console.log(`setting list item value... of ${newTask.value}`)
    newListItem.innerHTML = `${newTask.value} <button data-description="${newTask.value}">X</button>`;
    newTask.value = "";
    console.log("Adding value to the list");
    taskList.appendChild(newListItem)
  });

  taskList.addEventListener("click", e=> {
    console.log(e.target.parentNode)
    if (e.target.localName === "button") {
      console.log("Deleting this Task");
      let list = e.target.parentNode
      list.parentNode.removeChild(list)
    }
  });

});
