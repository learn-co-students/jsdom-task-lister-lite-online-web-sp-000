document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('input[value="Create New Task"]').addEventListener("click", function(e){
    e.preventDefault();
    createTask();
  });

  function createTask() {
    let text = document.getElementById("new-task-description").value;
    let list = document.getElementById('tasks');
    let li = document.createElement('li');
    li.innerHTML = `${text}<button data-description="${text}">X</button>`;
    list.appendChild(li);
    document.getElementById("new-task-description").value = "";
    document.querySelectorAll('#tasks li button').forEach(button => button.addEventListener("click", function(e){
      e.preventDefault();
      button.parentNode.remove()
      console.log(button)
    }));
  }

  document.querySelectorAll('#tasks li button').forEach(button => button.addEventListener("click", function(e){
    e.preventDefault();
    button.parentNode.remove()
  }));

});
