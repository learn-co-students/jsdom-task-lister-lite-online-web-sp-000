document.addEventListener("DOMContentLoaded", () => {

    // grab the relevant input fields
    const newTaskForm = document.getElementById("create-task-form");
    const newTaskDescription = document.getElementById("new-task-description");
    const newTaskPriority = document.getElementById("new-task-priority");

    // grab the ul where new tasks will live on the DOM
    const newTaskUl = document.getElementById("tasks");

    // attach event listener on submit
    newTaskForm.addEventListener("submit", createNewTask);

});

const createNewTask = event => {
    event.preventDefault();

    //stop form from trying to submit
    const newTaskDescription = document.getElementById("new-task-description");
    const newTask = document.createElement("li");

    newTask.textContent = newTaskDescription.value;

    appendNewTask(newTask);

    event.target.reset();
};

const appendNewTask = task => {
    document.getElementById("tasks").appendChild(task);
};

// Bonus Deliverables
// 1. A delete function that will remove tasks from your list
// 2. A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
// 3. As a challenge, implement a sorting functionality that displays the tasks ascending or descending order based on priority
// 4. An additional input field (e.g. user, duration, date due)
// 5. Ability to edit tasks
// 6. Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM
