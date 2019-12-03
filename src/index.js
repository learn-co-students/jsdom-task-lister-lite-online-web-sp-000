document.addEventListener("DOMContentLoaded", () => {
  const list = new List();
  const newTaskForm = document.getElementById('create-task-form');
  const newTaskDescription = document.getElementById('new-task-description');
  const tasksTag = document.getElementById('tasks')
  const magic = () => (tasksTag.innerHTML = list.showTasks());
  newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    list.createNewTask(newTaskDescription.value);
    e.target.reset();
    magic();
  })
  tasksTag.addEventListener('click', (e) => {
    if (e.target.nodeName==='BUTTON'){
      list.destroyTask(e.target.dataset.description);
      magic();
    }
  })
});
