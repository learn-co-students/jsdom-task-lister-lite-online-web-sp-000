document.addEventListener("DOMContentLoaded", () => {
  // your code here
});


document.getElementById("submit").addEventListener('click', function(event){
  // debugger;
  let grabInput = document.getElementById("new-task-description").value;


    document.getElementById('tasks').innerHTML = grabInput;
  
    
  event.preventDefault();
});