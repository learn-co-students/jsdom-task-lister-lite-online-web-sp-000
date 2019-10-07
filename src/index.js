document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let form = document.getElementById('create-task-form');
  form.addEventListener('submit', function(event){
    let li = document.createElement('li');
    let select = document.querySelector('select').value;
    if (select === 'high'){
      li.className = 'high';
    } else if (select === 'medium'){
      li.className = 'medium';
    } else if (select === 'low') {
      li.className = 'low';
    }

    li.innerHTML = `${document.getElementById('new-task-description').value} <a href="#">Delete</a>`;
    let ul = document.getElementById('tasks');
    ul.appendChild(li);
    let deleteLink = li.querySelector('a');
    
    deleteLink.addEventListener('click', function(event){
      deleteLink.parentNode.remove();
    })

    sort(ul);
    event.preventDefault();
  })
});

function sort(ul){
  let tasks = ul.querySelectorAll('li');
  let sortedTasks = Array.from(tasks).sort(function(a, b){
    let c = convertPriorityToNumber(a);
    let d = convertPriorityToNumber(b);
    return c < d ? 1 : c > d ? -1 : 0;
  });
  while (ul.firstChild){
    ul.removeChild(ul.firstChild)
  };
  for (let i=0; i< sortedTasks.length; i++){
    ul.appendChild(sortedTasks[i]);
  }
}

function convertPriorityToNumber(li){
  if (li.className === 'high'){
    return 3;
  } else if (li.className === 'medium'){
    return 2;
  } else if (li.className === 'low'){
    return 1;
  }
}