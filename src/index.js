document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("input[type=submit]").addEventListener("click", function(event) {
  	let newList = document.getElementById("new-task-description").value;
  	document.getElementById("tasks").innerHTML += "<li>" + newList + "</li>";
    event.preventDefault();

  });
});
