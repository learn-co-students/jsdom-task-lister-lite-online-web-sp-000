document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTask = document.getElementById('new-task-description')
  const ul = document.getElementById('tasks')
  const form = document.getElementById('create-task-form')

  function addTask() { 
    let taskArray = [];

    newTask.addEventListener('keypress', function(e) {
      taskArray.push(e.key);
    });

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      let li = document.createElement('li');

      let button = document.createElement('button');
      button.setAttribute('class', 'delete-task');
      button.innerText = 'X';

      let dropdown = document.createElement('select');
      dropdown.setAttribute('class', 'priority');

      let high = document.createElement('option');
      high.value = 'high';
      high.innerText = 'high';

      let medium = document.createElement('option');
      medium.value = 'medium';
      medium.innerText = 'medium';

      let low = document.createElement('option');
      low.value = 'low';
      low.innerText = 'low';

      dropdown.appendChild(high);
      dropdown.appendChild(medium);
      dropdown.appendChild(low);

      let taskString = taskArray.join('');
      li.innerText = taskString;
      ul.appendChild(li); 
      li.appendChild(button);
      li.appendChild(dropdown)
      button.addEventListener("click", function(e) {
        button.parentNode.remove();
      });

      dropdown.onchange = function() {
        let x = dropdown.value;
        if (x === "high") {
          dropdown.parentNode.style.color = "#ff0000";
          dropdown.parentNode.setAttribute('class', x)
        } else if (x === "medium") { 
          dropdown.parentNode.style.color = "#ffa500";
          dropdown.parentNode.setAttribute('class', x)
        } else if (x === "low") {
          dropdown.parentNode.style.color = "#00FF00";
          dropdown.parentNode.setAttribute('class', x)
        }
      };

      newTask.value = '';
      taskArray.length = 0;
    })
  }

  addTask();
    // button.addEventListener('click', event => {
    //   //handle click
    //   button.parentNode.remove();
    // })

  // let prioritise = document.createElement('button');
  // prioritise.setAttribute('id', 'prioritise');
  // prioritise.innerText = "Prioritise";

  // let main = document.getElementById('main-content');
  // main.appendChild(prioritise);

  // on click, prioritise changes the order of the ul elements
  // let prioritisedList = document.createElement('ul')
  // let listItems = document.getElementsByTagName('li')
  // prioritise.addEventListener("click", function(e) {
  // })
});