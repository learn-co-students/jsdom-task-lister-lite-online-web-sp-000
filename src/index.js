document.addEventListener("DOMContentLoaded", () => {
  // your code here

    document.querySelector('[type=submit]').addEventListener("click", function(e) {
      li = document.createElement('li')
      document.querySelector('#tasks').appendChild(li).innerHTML = document.querySelector("input#new-task-description").value
      document.querySelector("input#new-task-description").value = ""
      e.preventDefault();
    }, false);

});
