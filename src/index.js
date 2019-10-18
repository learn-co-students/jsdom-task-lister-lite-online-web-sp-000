document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('create-task-form').lastElementChild.addEventListener("click", function(event) {
    event.preventDefault()
    document.getElementById('tasks').innerHTML += `<li>${document.getElementById('new-task-description').value}</li>`
  }, false)
});
