document.addEventListener("DOMContentLoaded", () => {
  const submit = document.querySelector("form#create-task-form").lastElementChild
  const task = document.querySelector("form#create-task-form").querySelector("input#new-task-description")
  const toDos = document.querySelector("div#list")

  submit.addEventListener("click", function(e) {
    e.preventDefault()
    let listItem = document.createElement("li")
    listItem.textContent = task.value
    toDos.appendChild(listItem)
    task.value = ""
  })
});
