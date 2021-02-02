document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('input')[1].addEventListener("click", function(event) {
        let task = document.createElement('li')
        task.innerHTML = document.querySelectorAll('input')[0].value
         document.getElementById('tasks').appendChild(task)
         event.preventDefault();
}, false);
});
