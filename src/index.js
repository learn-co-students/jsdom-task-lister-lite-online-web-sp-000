document.addEventListener("DOMContentLoaded", () => {
    handleOnSubmit();
    removeTaskOnClick();
});



function handleOnSubmit() {
    const taskList = document.getElementById("tasks");
    const taskForm = document.querySelector("#create-task-form");
    taskForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const taskDescription = document.querySelector("#new-task-description").value;
        const taskItem = document.createElement("li");
        taskItem.className = "task";
        taskItem.innerText = taskDescription;
        taskList.appendChild(taskItem);
        let removeButton = createRemoveTaskButton();
        taskItem.innerHTML += removeButton;
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