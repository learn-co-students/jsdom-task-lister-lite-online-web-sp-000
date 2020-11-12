document.addEventListener("DOMContentLoaded", function(e) {
  let submit = document.getElementById('create-task-form');

  submit.addEventListener("submit", function(e) {
    e.preventDefault();
    let inputValue = e.target.querySelector("#new-task-description").value;
    let list = document.getElementById("list");
    let ul = document.createElement('ul');
    list.appendChild(ul);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = inputValue;
  })
})



