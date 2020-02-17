
document.addEventListener("DOMContentLoaded", () => {
const createTaskForm = document.getElementById("create-task-form");
// const deleteTasks = document.getElementById("delete-task-form");

createTaskForm.addEventListener("submit", createNewTask);
// deleteTasks.addEventListener("submit", deleteAllTasks);
});

const createNewTask = event => {
event.preventDefault();
const newTaskDescription = document.getElementById("new-task-description");
const newTask = document.createElement("li");
newTask.innerText = newTaskDescription.value;
console.log(newTask);

appendNewTask(newTask);
event.target.reset();
};

const appendNewTask = task => {
document.getElementById("tasks").appendChild(task);
};

// const deleteAllTasks = event => {
// event.preventDefault();
// const findTasks = document.getElementById("tasks");
// console.log(findTasks);
// findTasks.innerText = "";
// };
