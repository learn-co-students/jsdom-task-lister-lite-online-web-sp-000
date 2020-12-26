document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form');
  // let input = document.getElementById('new-task-description');

  form.addEventListener('submit', function(e){
    e.preventDefault();

    let taskContent = document.getElementById('new-task-description').value;

    let newTask = document.createElement('li');
  
    newTask.innerText = taskContent;
  
    document.getElementById('tasks').appendChild(newTask);


  });

  // input.addEventListener('keydown', function(event){
  //   taskContent += event.key; 
  // });





});

