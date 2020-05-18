document.addEventListener("DOMContentLoaded", () => {
  // your code here
  submit = document.getElementById("create-task")
  submit.addEventListener("submit", function(event){
    event.preventDefault()
  })
});
