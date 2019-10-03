document.addEventListener("DOMContentLoaded", () => {
  // your code here

    let task_form = document.getElementById('create-task-form')
    task_form.addEventListener('submit', function(e) {
      e.preventDefault();
      let new_task = document.getElementById('new-task-description')
      let tasks_list = document.getElementById('tasks')
      let li = document.createElement('li');
      li.innerHTML = new_task.value
      tasks_list.appendChild(li)
      new_task.value = ''


    })
});
