document.addEventListener("DOMContentLoaded", () => {
  //target the input area
  const newTaskDescription = document.getElementById("new-task-description");
  //target the location of the tasklist
  const list = document.querySelector('#tasks');
  //target the create task form 
  const form = document.getElementById('create-task-form');

  //adding the function to the create task form 
  //after eventlistener submit
  form.addEventListener('submit', function(e)) {
    e.preventDefault();
    //hold the value of input after submit
    const input = newTaskDescription.value;
    // create a li inside the task
    newListItem = document.createElement('li');
    //setting the text of li to input
    newListItem.innerhtml = input;
    //need to select the .id#task and append it
    list.appendChild(newListItem); 

    form.reset();
  

  })
  


});
