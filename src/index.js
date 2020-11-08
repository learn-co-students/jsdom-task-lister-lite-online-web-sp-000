document.addEventListener("DOMContentLoaded", () => {
    handleOnSubmit();
    handlePriorityOnClick();
    removeTaskOnClick();
});



function handleOnSubmit() {
    const taskList = document.getElementById("tasks");
    const taskForm = document.querySelector("#create-task-form");
    let taskCounter = 0;
    taskForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const taskDescription = document.querySelector("#new-task-description").value;
        const taskItem = document.createElement("li");
        taskItem.className = `task${taskCounter+1}`;
        taskItem.innerText = taskDescription;
        taskList.appendChild(taskItem);
        let removeButton = createRemoveTaskButton();
        taskItem.innerHTML += removeButton;
        taskCounter += 1;
        taskForm.reset();
    }, false);
}

function createRemoveTaskButton() {
    return '<button class="remove-btn" data-action="delete">X</button>'
}

function removeTaskOnClick() {
    const taskList = document.getElementById("tasks");
    taskList.addEventListener("click", deleteTask);
}

function deleteTask(event) {
    const removeTarget = event.target;
    if (removeTarget.dataset.action == "delete") {
        removeTarget.parentNode.remove();
    }
}


// A priority value selected from a dropdown that is 
// used to determine the color of the text in the 
// list (e.g. red for high priority, yellow for medium, green for low)
function handlePriorityOnClick() {
  createPriorityList();
  const priorityList = document.querySelector(".priority-list");
  let priorityCounter = 0;
  priorityList.addEventListener("click", function(event) {
    // event.preventDefault();
    let priority = document.querySelector(`.priority${priorityCounter+1}`);
    let task = document.querySelector(`.task${priorityCounter+1}`);
    task.style.color = priority.style.color;
    priorityCounter += 1;
  });
  // return color;
}

function createPriorityList() {
  const priorityList = document.createElement("select");
  priorityList.className = "priority-list";
  let priorities = ["low", "medium", "high"];
  // Create each priority option high, medium, low 
  for (let i = 0; i < priorities.length; i++) {
    let priority = document.createElement("option");
    priority.className = `priority${i+1}`;
    priority.value = priorities[i];
    priority.text = priorities[i].charAt(0).toUpperCase() + priorities[i].slice(1);
    priorityList.append(priority);
  }
  const taskForm = document.querySelector("#create-task-form");
  taskForm.appendChild(priorityList);
  let priority1 = document.querySelector(".priority1");
  priority1.style.color = "green";
  let priority2 = document.querySelector(".priority2");
  priority2.style.color = "yellow";
  let priority3 = document.querySelector(".priority3");
  priority3.style.color = "red";
  return priorityList;
}
