document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelectorAll('#create-task-form input')[1].addEventListener("click", function(e) {
    let ul = document.getElementById('tasks');
    let li = document.createElement("li");
    li.innerHTML = document.querySelector('#create-task-form input').value;
    ul.appendChild(li);
    document.querySelector('#create-task-form input').value = ""
    e.preventDefault();
  }, false);
});
