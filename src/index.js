document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("create-task-form");
  const description = document.getElementById("new-task-description").value;
  const text = document.createTextNode(description);
  const ul = document.getElementById("tasks");
  const newLi = document.createElement("li");

  function createTask(){
    form.addEventListener("submit", function(e){
      e.preventDefault(); //stop submit

      let li = newLi.appendChild(text); //<li>description</li>
      ul.appendChild(li); //<ul><li>...</li></ul>
    };
  };

  createTask()

});
