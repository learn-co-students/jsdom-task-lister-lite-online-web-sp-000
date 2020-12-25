document.addEventListener("DOMContentLoaded", () => {
//creating variables. Taking form id and input id
  let task = document.getElementById("new-task-description");
  let form = document.getElementById("create-task-form");
//declaring a function
	function logSubmit(event) {
//we are taking user input
  let inp = task.value;
//creating a new element for our output
  let outp = document.createElement('li');
//saying that the inner text of newly created element is user input
  outp.innerText = inp;
//selecting a parent of "li" => "ul"
  let ul = document.querySelector('ul#tasks');
//appending a child to a parent with the value of the output
  ul.append(outp);
//clearing the input for a new one
  task.value = " ";
//preventing form submission
  event.preventDefault();
  
}
//invoking a form on submit
form.addEventListener('submit', logSubmit);

});