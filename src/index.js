document.addEventListener("DOMContentLoaded", () => {
  
  const tasks = document.getElementById('tasks')
  const submitButton = document.getElementById('submit_form')
  
  
  submitButton.addEventListener('click', function(event) {
    let element = document.createElement('li')
     event.preventDefault();
     element.innerHTML = document.getElementById('new-task-description').value
     tasks.appendChild(element)

  });

});