const div = document.getElementById( 'main-content' );

div.onmouseover = function() {
  this.style.backgroundColor = 'green';
  var h1s = this.getElementsByTagName( 'h1' );
  h1s[0].style.backgroundColor = 'yellow';
};
div.onmouseout = function() {
  this.style.backgroundColor = 'transparent';
  var h1s = this.getElementsByTagName( 'h1' );
  h1s[0].style.backgroundColor = 'transparent';
};
const el = document.getElementById('list');
el.style.fontFamily = 'Georgia';

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", function(e){
    el.onmouseover = function() {
      el.style.fontFamily = 'Courier';
    };
    let task = document.getElementById("new-task-description").value;
    let new_el = document.createElement("li")
    new_el.textContent = task;
    const taskList = document.getElementById("tasks");
    taskList.appendChild(new_el);
    e.preventDefault();
    frm.reset();  // Reset
   return false; // Prevent page refresh

  });
});