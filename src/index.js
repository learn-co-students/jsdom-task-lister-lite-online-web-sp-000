document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const user_input = document.getElementById('new-task-description');
  let todo_list = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    let li = document.createElement('li');
    li.innerHTML = user_input.value;
    let button = document.createElement('button');
    button.innerHTML = "X";

    li.appendChild(button);
    todo_list.appendChild(li);

    button.addEventListener('click', function(event) {
      li.remove();
    })

    event.preventDefault();
  })
});
