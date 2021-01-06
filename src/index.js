document.addEventListener("DOMContentLoaded", () => {
  

const form = document.getElementById('create-task-form');
const taskList = document.getElementById('tasks');


form.addEventListener("submit", function(event) {
  let description = document.getElementById('new-task-description')
  let li = document.createElement('li');
  // let deleteButton = document.createElement('button');
  // deleteButton.textContent = "X";
  // deleteButton.setAttribute('data-description', description.value);
  li.textContent = description.value;
  // li.append(deleteButton);
  taskList.appendChild(li);
  event.preventDefault();
});

// let deleteButtons = document.getElementsByTagName('button');

// for (let i = 0; i < deleteButtons.length; i++) {
//   const element = deleteButtons[i];
//   element.addEventListener('onclick', function() {
//     element.remove();
//     });
// }


// deleteButtons.addEventListener('onclick', function(event) {
//   let description = event.target.getAttribute('data-description')
//   taskList.removeChild(li);
// });


});
