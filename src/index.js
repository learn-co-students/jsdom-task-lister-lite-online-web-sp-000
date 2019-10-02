document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  let s = document.querySelectorAll('input')[1];
  
  s.addEventListener('click', function(e) {
    e.preventDefault();
    let task = document.querySelector('#new-task-description').value;
    document.querySelector('#list').innerHTML += '<p>' + task + '</p>';
  })
});
