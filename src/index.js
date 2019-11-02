document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let form = document.getElementById('create-task-form');

  if (form.addEventListener){
      form.addEventListener("submit", addFunction, false);
      //Modern browsers
 }else if(form.attachEvent){
      form.attachEvent('onsubmit', addFunction)
      //Old IE
 }


  function addFunction (event) {
    let task = document.getElementById('tasks');
    let li = document.createElement("li");
    let form = document.getElementById('create-task-form')
    li.appendChild(document.createTextNode(form.elements[0].value));
    task.appendChild(li);
    event.preventDefault();
  }

});
