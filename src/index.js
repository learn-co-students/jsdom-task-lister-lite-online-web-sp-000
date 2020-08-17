document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form')
  const list = document.querySelector('#tasks')
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    let text = "<li>" + form.elements[0].value + "</li><br>";
    list.innerHTML += text
  }
  )
});
