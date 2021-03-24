let form = document.querySelector('#create-task-form')

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("click", function(event){
    event.preventDefault();
  })
});
