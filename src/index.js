const form = document.getElementById('create-task-form')
const list = document.getElementById('tasks')

const createItem = event => {
  const description = document.getElementById('new-task-description');
  const newItem = document.createElement('li');
  newItem.innerText = description.value;
  appendItem(newItem)
}
const appendItem = task => {

  document.getElementById('tasks').appendChild(task);
}

document.addEventListener("DOMContentLoaded", () => {
 
  form.addEventListener("submit", function(event) {
    event.preventDefault()
    createItem(event)
    event.target.reset()
  });
});
