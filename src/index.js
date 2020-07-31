document.addEventListener("DOMContentLoaded", () => {
});

let form = document.getElementById("create-task-form")

function addItem(event) {
  event.preventDefault();
  let ul = document.getElementById('tasks')
  let li = document.createElement('li')
  li.innerText = document.getElementById("new-task-description").value
  ul.appendChild(li)
}

form.addEventListener("submit", function (event) {
  addItem(event)
});

