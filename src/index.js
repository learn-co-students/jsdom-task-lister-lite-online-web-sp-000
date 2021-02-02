document.addEventListener("DOMContentLoaded", () => {

});
document.addEventListener('submit', (event) =>{
  event.preventDefault()
  const list = document.getElementById('tasks')
  const newTaskData = document.getElementById('new-task-description').value
  const taskListNode = document.createElement("LI");
  const textNode = document.createTextNode(newTaskData);
  taskListNode.appendChild(textNode)
  list.appendChild(taskListNode)
})
