document.addEventListener("DOMContentLoaded", () => {

  let tasks = document.getElementById('tasks');
  

  document.addEventListener('submit', function(e) {
    e.preventDefault();
    let description = document.getElementById("new-task-description").value;
    let taskLi = document.createElement('li');
    taskLi.innerHTML = `${description} `

    let button = document.createElement("BUTTON")
    button.innerText = "X"
    button.addEventListener("click", function(button) {
      button.target.parentNode.remove();
    });
    tasks.appendChild(taskLi);
    taskLi.appendChild(button);
    e.target.reset()
  });


});
