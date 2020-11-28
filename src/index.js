document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', (e) => addTask(e));
});

function addTask(e) {
  e.preventDefault();
  const task = document.getElementById('new-task-description');
  const ul = document.getElementById('tasks');
  const li = document.createElement('li');
  li.innerText = task.value;
  ul.appendChild(li);
  e.target.reset();
}
