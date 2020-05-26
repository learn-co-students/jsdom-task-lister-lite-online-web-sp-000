document.addEventListener("DOMContentLoaded", () => {
  let el = document.getElementById('create-task-form');
  el.addEventListener('submit', handleSubmit); 
  button.addEventListener('click', deleteButton);

  function handleSubmit(e) {
    let newTask = document.getElementById('new-task-description').value
    display(newTask);
    e.preventDefault();
    e.target.reset()

  }

  function display(testContent) {
    let content = document.getElementById('tasks');
    let li = document.createElement('li')
    li.innerHTML = testContent
    content.appendChild(li)
  }

});
