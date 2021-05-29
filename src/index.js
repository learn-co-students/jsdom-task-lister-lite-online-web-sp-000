document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let submit = document.getElementById("create-task-form").querySelectorAll('input')[1];
  submit.addEventListener("click", function(event) {
    event.preventDefault();
    let input = document.getElementById("create-task-form").querySelectorAll('input')[0];
    let ul = document.getElementById('tasks');
    let li = document.createElement('li');
    li.innerHTML = input.value;
    ul.appendChild(li);
    let button = document.createElement('button');
    button.innerHTML = "X";
    li.appendChild(button);
    button.addEventListener("click", function(event) {
      li.remove();
    });
    input.value = null;
  }); 
});
