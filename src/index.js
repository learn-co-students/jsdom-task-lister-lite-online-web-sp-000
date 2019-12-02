document.addEventListener("DOMContentLoaded", () => {
  //DOM elements
  const newTaskForm = document.querySelector("#create-task-form")
  const newTaskDescription = document.querySelector("#new-task-description")
  //ul for new tasks
  const newTaskUl = document.querySelector("#tasks")

  newTaskForm.addEventListener("submit", createNewtask)

})

const createNewtask = event => {
  event.preventDefault();

  const newTaskDescription = document.querySelector("#new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
}


const appendNewTask = task => {
  document.querySelector("#tasks").appendChild(task)

}
