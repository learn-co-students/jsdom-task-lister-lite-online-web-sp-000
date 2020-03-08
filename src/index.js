const inputField = document.querySelector("#new-task-description")
const submitButton = document.getElementsByTagName("input")[1]
const tasksUl = document.getElementById("tasks")


submitButton.addEventListener("click", function(event) {
  let newTask = inputField.value
  let newListItem = document.createElement("li")
  let deleteButton = document.createElement("button")
  deleteButton.innerText = "X"
  newListItem.innerText = newTask
  tasksUl.appendChild(newListItem)
  newListItem.appendChild(deleteButton)
  inputField.value = ""
  event.preventDefault();
}, false);

tasksUl.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    let toDelete = e.target.parentElement
    toDelete.remove()
  }
})