document.addEventListener("DOMContentLoaded", () => {

  // selects the form id from the document 
  const form = document.querySelector('form');

  // allows the form to be submitable
  form.addEventListener('submit', function(event){
    event.preventDefault();

    // accepts user input and returns the value
    let input = document.getElementById('new-task-description');
    let inputValue = input.value;

    // Creates a li and assigns the inner text value as the user input
    let li = document.createElement('li');
    li.innerText = inputValue;

    // assigns tasklist as the ul for tasks and appends the newly create li to the tasklist
    let taskList = document.querySelector('ul#tasks');
    taskList.append(li);
    inputValue = '';

  })
});