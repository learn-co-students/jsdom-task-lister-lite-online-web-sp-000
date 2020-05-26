document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("form").addEventListener("submit", function(event) {
    const description = document.getElementById("new-task-description");
    const text = description.value;
    console.log(text)
    description.value = ''
    const li = document.createElement('li')
    li.innerText = text
    document.getElementById('tasks').appendChild(li)
    event.preventDefault();
  });
});
