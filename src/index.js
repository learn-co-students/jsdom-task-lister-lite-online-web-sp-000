document.addEventListener("DOMContentLoaded", () => {

  const tasks = document.querySelector('ul#tasks');
  const description = document.querySelector('input#new-task-description');
  const descriptions = [];

  document.addEventListener('submit', (event)=>{
    descriptions.push(description.value);
    tasks.innerHTML = listTask(descriptions);
    event.target.reset();
    event.preventDefault();
  });

  document.addEventListener('click', (event)=>{
    if(event.target.nodeName === 'BUTTON'){
      const id = event.target.description_id;
      descriptions.splice(id, 1);
      tasks.innerHTML = listTask(descriptions);
    }
  });
});

function listTask(descriptions){
  let list = '';
  for(let i=0; i<descriptions.length; i++){
    list += `<li>${descriptions[i]}<button description_id='${i}'>X</button></li>`;
  }
  return list;
}
