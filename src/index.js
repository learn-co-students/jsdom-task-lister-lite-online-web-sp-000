document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // functions 
  function addTask(event) {
    event.preventDefault();
    const taskList = document.getElementById('tasks'); 
    const listNode = document.createElement('li'); 
    const taskText = document.getElementById('new-task-description');
    const textNode =  document.createTextNode(`${taskText.value} `);
    const delButton = document.createElement('BUTTON');
    delButton.textContent = "X"; 
    listNode.appendChild(textNode); 
    listNode.appendChild(delButton); 
    taskList.appendChild(listNode); 
    taskText.value = '';
  }


  // script 
  const createTaskForm = document.getElementById('create-task-form');
  createTaskForm.addEventListener('submit', addTask)



});
