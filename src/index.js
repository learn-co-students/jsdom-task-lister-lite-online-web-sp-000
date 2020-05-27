document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  let todo_list = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    let li = document.createElement('li');
    // TODO: set the text of the new li to what the user entered
    todo_list.appendChild(li);
    event.preventDefault();
  })
});
