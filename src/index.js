document.addEventListener("DOMContentLoaded", () => {
  // your code here
  function addTaskLi(text) {
      const taskUl = document.getElementById('tasks');
      const taskLi = document.createElement('li');
      taskLi.setAttribute('id', 'task_li');
      taskLi.innerHTML = text;
      taskUl.appendChild(taskLi);
  }

  const newTask = document.getElementById('create-task-form')
  const taskDesc = document.getElementById('new-task-description')
  newTask.addEventListener("submit", function(e) {
      e.preventDefault();
      console.log(taskDesc.value)
      addTaskLi(taskDesc.value)
  });

});
