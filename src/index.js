document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let count = 1
  function addTaskLi(text) {
    const taskUl = document.getElementById('tasks');
    const taskLi = document.createElement('li');
    const button = document.createElement("button");
    button.innerHTML = "X";
    taskLi.setAttribute('id', `task_li_${count}`);
    button.setAttribute('id', `delete_${count}`)
    taskLi.innerHTML = text;
    taskUl.appendChild(taskLi);
    taskLi.appendChild(button)
    count += 1
  }

  const newTask = document.getElementById('create-task-form')
  const taskDesc = document.getElementById('new-task-description')
  newTask.addEventListener("submit", function(e) {
      e.preventDefault();
      addTaskLi(taskDesc.value)
      e.target.reset()
  });

  const taskUl = document.getElementById('tasks');
  taskUl.addEventListener("click", (e) => {
      e.target.parentNode.remove();
  });

});
