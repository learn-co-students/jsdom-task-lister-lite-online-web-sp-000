document.addEventListener("DOMContentLoaded", () => {

  let form = document.querySelector("#create-task-form");
  let ul = document.querySelector("#tasks");
  let inputValue = document.getElementById("new-task-description");

  form.addEventListener("submit", function(event){
    event.preventDefault();
    let li = document.createElement('li');
    li.innerText = inputValue.value;
    ul.appendChild(li);

    let button = document.createElement("button");
    button.innerHTML = "X";
    li.appendChild(button);

    button.addEventListener("click", function(){
        li.remove();
    });

  })
});


