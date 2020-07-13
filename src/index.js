document.addEventListener("DOMContentLoaded", () => {

  let id = document.querySelector('create-task-form');
  let taskList = document.querySelector('#tasks');
  let deleteButton = document.createElement('button');
  deleteButton.innerText = 'x';

  let placeholder = document.querySelector('#new-task-description');

  id.addEventListener('submit', function(event) {
    event.preventDefault();
  }, false);

  document.body.appendChild(element);
  let ul = document.querySelector('ul.tasks')
  for (let i = 0; i < 100; i++) {
    let li = document.createElement('li')
    li.innerHTML = (i + 1).toString()
    ul.appendChild(li)
  } 
  element.appendChild(ul)
});
