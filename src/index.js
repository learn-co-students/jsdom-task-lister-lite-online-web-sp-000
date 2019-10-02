document.addEventListener("DOMContentLoaded", () => {
  // your code here
 let form = document.getElementById('create-task-form')
 form.addEventListener('submit', function(e){
   e.preventDefault();
   let inputVal = document.getElementById('new-task-description').value; 
   let ul = document.getElementById('tasks')
   let li = document.createElement('li');
   li.innerHTML = inputVal;
   ul.appendChild(li); 

   let button = document.createElement('button');
   button.innerText = "Delete"
   li.appendChild(button)

   document.getElementById('new-task-description').value = ""

 })
});
