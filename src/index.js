document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const inputBox = document.getElementById('new-task-description');
  const submit = document.querySelector('input[type="submit"]');
  let toDoList = [];
  let count = 0;
  
submit.addEventListener('click', (e) => {
  e.preventDefault();
  let input = inputBox.value;
  toDoList.push(input);
  let ul = document.querySelector('ul#tasks');

  let li = document.createElement('li');
  li.id = count;
  count++;
  li.innerHTML = toDoList[toDoList.length - 1];
  ul.appendChild(li);

  let btn = document.createElement('button');
  btn.innerHTML = 'X';
  li.appendChild(btn);

  btn.onclick = function () {
    document.getElementById(li.id).remove();
   };
   inputBox.value = "";
});
  });
