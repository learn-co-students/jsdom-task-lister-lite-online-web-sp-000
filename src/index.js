document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    newTask(input.value);
  });
});

const form = document.getElementById('create-task-form');
const list = document.getElementById('tasks');
const input = document.getElementById('new-task-description')

function newTask(task) {
  let li = document.createElement('li');
  let button = document.createElement('button');
  li.innerText = task;
  list.appendChild(li);
  input.value = "";
  list.lastChild.appendChild(button);
  button.innerText = "X";
}