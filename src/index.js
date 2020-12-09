document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form#create-task-form")
  let list = document.querySelector("ul#tasks")

  form.addEventListener("submit", function(event) {
    let li = document.createElement('li')
    let task = document.querySelector("input#new-task-description").value

    list.appendChild(li).innerHTML = task

    event.preventDefault();
  })
});
