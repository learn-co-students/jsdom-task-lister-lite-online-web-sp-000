document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("new-task-description").innerHTML += "Sorry! <code>preventDefault()</code> won't let you submit this!<br>";
  event.preventDefault();
}, false);
