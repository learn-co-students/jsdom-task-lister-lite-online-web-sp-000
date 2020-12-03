document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let createTask = document.getElementById('create-task-form') 
  createTask.addEventListener('submit', submitTask)

  // const delButton = document.createElement('BUTTON');
  // delButton.textContent = "X"; 
  // listNode.appendChild(delButton); 

function submitTask(t){
  let newTask = document.getElementById('new-task-description').value
  display(newTask);
  t.preventDefault();
  t.target.reset()
  
  
}

function display(task){
  let taskList = document.getElementById('tasks');
  let list = document.createElement('li');
  list.innerHTML = task
  taskList.appendChild(list)
  }
});


