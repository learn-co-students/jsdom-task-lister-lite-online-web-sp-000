document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('input[type="submit"]').addEventListener("click", function(event) {
    event.preventDefault();
    
    let item = document.getElementById("new-task-description").value;
    let list = document.getElementById("list");
    let newItem = document.createElement("LI");
    
    newItem.innerHTML = item;
    list.appendChild(newItem);
  });
});
