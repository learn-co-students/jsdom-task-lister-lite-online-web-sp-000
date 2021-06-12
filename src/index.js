  
document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("create-task-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let entry = document.getElementById("new-task-description");
    let element = document.createElement('li');
    const ulElement = document.getElementById("tasks");
    ulElement.appendChild(element);
    let output = entry.value + " ";
    element.setAttribute("id", `new-task-${output}`);
    const x = document.createElement("BUTTON");
    x.setAttribute("name", `new-task-${output}`);
    x.setAttribute("onclick", `clearFields("${output}")`);
    x.innerHTML = "X"
    element.innerHTML = output;
    element.appendChild(x);
    entry.value = "";
    })

});

  function clearFields (value) {
    let element = document.getElementById(`new-task-${value}`);
    element.remove();
  }
