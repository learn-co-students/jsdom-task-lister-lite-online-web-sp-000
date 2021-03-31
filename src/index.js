document.addEventListener("DOMContentLoaded", () => {
  // your code here
  function addTask(event) {
    event.preventDefault();
    let task = document.getElementsByTagName("input")[0].value;
    let ul = document.getElementById("tasks");
    let li = document.createElement("li");

    li.appendChild(document.createTextNode(task));
    ul.appendChild(li);
  }

  document.getElementsByTagName("input")[1].addEventListener("click", addTask);
});
