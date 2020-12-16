


document.addEventListener("DOMContentLoaded", function() {
  // your code here
  console.log("The DOM has loaded");

  //need to find the textbox for user input
  const taskInput = document.querySelector('#new-task-description');
  //we need access to the form
  const taskForm = document.querySelector('#create-task-form');
//listening for the user to click submit
  taskForm.addEventListener('submit', function(event) {
    //preventing the page from redirecting or reloading since we are using JS to add the input.   
    event.preventDefault();
      //setting new task to the value of the user input
      const newTask = taskInput.value
      //finding and setting where we will be sending the input
      const list = document.querySelector('#tasks');
      //creating an li tag to be able to send the input to
      const newListItem = document.createElement('li')
      //setting the text content of the new li (node)
      newListItem.innerText = newTask
      //creating delete button
      const deleteButton = document.createElement('button')
      //setting the text content of the button
      deleteButton.innerText = 'X'
      //adding the content to the new node
      list.appendChild(newListItem)
      //adding the delete button to the new li we created
      newListItem.appendChild(deleteButton)
      //listening for click from user and then removing li when clicked
      deleteButton.addEventListener('click', function(e){
        newListItem.remove()
      })
      //resets the input field to get rid of last input
      taskForm.reset()
    });

  
  });

  