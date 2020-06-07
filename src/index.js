document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form');
  const inputBox = form.querySelector('#new-task-description');

  function createLi(inputValue) {
    const liNode = document.createElement('li');
    liNode.innerText = inputValue;
    liNode.innerHTML += `<button>x</button>`
    return liNode;
  }

  function addLiToTasks(liNode) {
    const ulNode = document.querySelector('div#list ul#tasks');
    ulNode.appendChild(liNode);
  }


  function addButtonListener(liNode) {
    const button = liNode.querySelector('button')
    button.addEventListener('click', (e) => {
      liNode.remove();
    });
  }

  document.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = inputBox.value;
    const liNode = createLi(inputValue)
    addLiToTasks(liNode);
    addButtonListener(liNode);
    inputBox.value = "";
  });

});
