document.addEventListener("DOMContentLoaded", () => {
  console.log('Dom is loaded fully')
  // your code here
  const form = document.getElementById('create-task-form');
  const button = document.getElementById('button');
  let log = document.getElementById('tasks');
  let value = document.getElementById('new-task-description');
  let arrayOfValue = [];

  function logSubmit(event){
    let ilElement = document.createElement('li');
    let node = document.createTextNode(`${value.value}`);
    ilElement.appendChild(node);
    log.appendChild(ilElement);
    event.preventDefault();
  }

function erase(){
  let elements = document.querySelectorAll("li")
  element = elements[elements.length - 1];
  element.remove();
}

  form.addEventListener('submit', logSubmit);
  button.addEventListener('click', erase);
});


//const input = document.getElementById('input');
//input.addEventListener('click', function(event) {
//  alert('I was clicked!');
//});
