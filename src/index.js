document.addEventListener("DOMContentLoaded", () => {

  let form = document.querySelector('form');
   let ulTasks = document.getElementById('tasks');


  form.addEventListener('submit', function(event){
   event.preventDefault();

   ulTasks.removeChild;

    let task = document.getElementById('new-task-description');

      let li = document.createElement('li');
      ulTasks.appendChild(li);

        li.innerText = task.value;
      });
});
