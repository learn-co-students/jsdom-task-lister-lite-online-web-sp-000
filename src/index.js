document.addEventListener("DOMContentLoaded", attr => {
  function createNewTask() {
      let task = document.getElementById('new-task-description')
      let newTask = document.createElement('li')

      newTask.innerText = task.value
      addDeleteButton(newTask)
      task.value = ""

      document.getElementById('tasks').appendChild(newTask);
  }

  function addDeleteButton(task) {
      let button = document.createElement('button')

      button.innerText = "X"
      button.addEventListener('click', function(event) {
          event.preventDefault()
          task.remove()
      })

      task.appendChild(button)
  }

  document.getElementById("create-task-form")
      .addEventListener('submit', function(event) {

          createNewTask();
          event.preventDefault();
      });

});