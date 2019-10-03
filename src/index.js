document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    let text = document.getElementById('new-task-description').value;
    let ul = document.getElementById('tasks');
    let li = document.createElement('li');
    li.innerHTML = text;
    ul.appendChild(li);
  });
});
