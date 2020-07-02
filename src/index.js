document.addEventListener('DOMContentLoaded', () => {
  // your code here
  document.querySelector('#create-task').addEventListener(
    'click',
    function (e) {
      const task = document.getElementById('new-task-description').value
      document.getElementById('new-task-description').value = ''
      document.getElementById('tasks').innerHTML += `<li>${task}</li>`
      e.preventDefault()
    },
    false
  )
})
