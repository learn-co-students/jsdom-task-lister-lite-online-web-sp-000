document.addEventListener("DOMContentLoaded", () => {

  document.addEventListener('submit', (e) => {
    ul = document.querySelector('#tasks')
    li = document.createElement('li');
    taskInput = document.querySelector('#new-task-description').value

    li.textContent = taskInput;
    ul.appendChild(li);

    document.querySelector('#create-task-form').reset();

    e.preventDefault()
  })
});
