document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener('submit', function(e) {
    let task = document.getElementById('new-task-description').value;
    addTask(task);
    e.preventDefault();
  });
});

let ul = document.getElementById('tasks');



function addTask(task) {
  let li = document.createElement('li');
  li.innerText = task
  ul.appendChild(li);
}




