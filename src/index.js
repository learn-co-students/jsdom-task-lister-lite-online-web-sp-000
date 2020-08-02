document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // grab the ids, add event listener for submit event, give instructions for what to do if submit is clicked

  const form = document.getElementById('create-task-form');
  const task = document.getElementById('new-task-description');
  const list = document.getElementById('tasks');

  form.addEventListener("submit", function(event) {
    const li = document.createElement('li')
    li.innerHTML = task.value
    list.appendChild(li);
    event.preventDefault();
  })
});
