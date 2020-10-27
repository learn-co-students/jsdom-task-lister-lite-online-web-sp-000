/*
Deliverables:
- As a user, I should be able to type a task into the input field.
- As a user, I should be able to click some form of a submit button.
- As a user, the task string that I provided should appear on the 
DOM after the submit button has been activated.
*/

document.addEventListener("DOMContentLoaded", () => {
    // your code here
    handleOnSubmit();
    // Show remove button if tasks have been added
    // if (document.getElementsByClassName("task")) {
    //     removeTaskOnClick();
    // }
});

function handleOnSubmit() {
    const submit = document.querySelector("input[type=submit]");
    const description = document.getElementById("new-task-description");
    let taskIndex = 0;
    submit.addEventListener("click", function(event) {
        document.getElementById("tasks").innerHTML +=
            `<li class="task">${description.value}</li>`;
        let removeButton = document.createElement("button");
        removeButton.className = "remove";
        removeButton.innerHTML = "X";
        document.getElementsByClassName("task").item(taskIndex).appendChild(removeButton);
        removeTaskOnClick(removeButton);
        taskIndex += 1;
        event.preventDefault();
    }, false);
};

function removeTaskButton() {
    let removeButton = document.createElement("button");
    removeButton.className = "remove";
    removeButton.innerHTML = "X";
};

function removeTaskOnClick(removeButton) {
    let task = document.getElementsByClassName("task");
    removeButton.addEventListener("click", function(event) {
        removeButton.parentNode.parentNode.removeChild(removeButton.parentNode);
    });
};