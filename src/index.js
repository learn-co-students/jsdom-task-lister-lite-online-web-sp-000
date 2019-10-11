document.addEventListener("DOMContentLoaded", () => {
  function addToDo(toDoItem) {
    const newListItem = document.createElement('li');
    newListItem.innerHTML = `${toDoItem} <u>delete</u>`;
    document.querySelector("#tasks").appendChild(newListItem);
  }


  formElements = document.querySelectorAll('input');
  formElements[1].addEventListener("click", function(e) {
    addToDo(formElements[0].value);
    e.preventDefault();
  }, false);

  document.addEventListener("click", function(e){
    let targetElement = e.target;
    if(targetElement.tagName == "U") {
      document.querySelector('ul').removeChild(targetElement.parentElement);
    }
  });
});
