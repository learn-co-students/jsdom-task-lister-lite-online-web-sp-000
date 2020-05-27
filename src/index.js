document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const list = document.getElementById("tasks");
  const tastDescriptionNode = document.getElementById("new-task-description")

  function listSubmit(event) {
    event.preventDefault();
    let input = tastDescriptionNode.value;
    list.appendChild(createList(input));
    tastDescriptionNode.value = '';
  }

  function createList(input) {
    const li = document.createElement('li');
    li.innerText = input;
    return li;
  }

  form.addEventListener('submit', listSubmit);
});
