document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

function taskSubmit(event) {
  console.log("taskSubmit");
  event.preventDefault();

  let grabTask = document.getElementById('new-task-description').value;
  let element = document.createElement("LI");
  element.innerHTML = grabTask;
  tasks.appendChild(element);
  // document.getElementById("tasks").innerHTML += grabTask;
}

const taskForm = document.getElementById('create-task-form');
taskForm.addEventListener('submit', taskSubmit);

// taskForm.addEventListener('submit', (e) => {
//   // on form submission, prevent default
//   e.preventDefault();
//   // construct a FormData object, which fires the formdata event
//   new FormData(taskForm);
// });

// taskForm.addEventListener('formdata', (e) => {
//   console.log('formdata fired');
 
//   // Get the form data from the event object
//   let data = e.formData;
//   for (var value of data.values()) {
//     console.log(value);
//   }
 
//   // submit the data via XHR
//   let request = new XMLHttpRequest();
//   request.open("POST", "/formHandler");
//   request.send(data);
// });