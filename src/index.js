document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("#create-task-form").addEventListener("submit", function(event) {
    event.preventDefault();
    newElement()
});
});

// Create a new list item when clicking on the "Add" button
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("new-task-description").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("tasks").appendChild(li);
  }
  document.getElementById("new-task-description").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}
