document.addEventListener("DOMContentLoaded", () => {
  // your code here
  addSubmitPrevent();
});

function addSubmitPrevent(){
  document.querySelector("#create-task-form").addEventListener("submit", function(event) {
    // document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
    event.preventDefault();
    addToList();
  }, false);
}
  

function addToList(){
  const myList = document.getElementById("tasks")
  const myTask = document.getElementById('new-task-description').value
  let entry = document.createElement('li')
  entry.appendChild(document.createTextNode(myTask))
  myList.appendChild(entry)
}

