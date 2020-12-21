document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const userInput = document.getElementById('new-task-description');
  const theForm = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  theForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let listItem = document.createElement('li');
    listItem.innerHTML = userInput.value
    taskList.appendChild(listItem);
  }); 

})