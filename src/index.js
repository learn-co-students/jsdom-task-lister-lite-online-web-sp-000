document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", function(e) {
    
    const ul = document.getElementById("tasks"),
          task = document.getElementById("new-task-description").value,
          li = document.createElement('li');

    li.innerText = task;
    ul.appendChild(li);

    e.preventDefault();
  
  });

});
