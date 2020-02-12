document.addEventListener("DOMContentLoaded", () => {

  let s = document.querySelectorAll("input")[1];

  s.addEventListener("click", function(event){
    event.preventDefault();
  
  let task = document.getElementById("new-task-description").value;
  document.getElementById("list").innerHTML += "<p>" + task + "</p>";
  })
});
