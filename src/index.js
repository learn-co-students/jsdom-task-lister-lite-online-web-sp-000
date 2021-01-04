document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let input = document.getElementById('new-task-description');
    let inputValue = input.value;
    
    let liItem = document.createElement('li');
    
    let ulAll = document.querySelector('ul');
    if (inputValue != '') {
      liItem.innerText = inputValue;
      ulAll.append(liItem);
      input.value = '';
    };
    
  })
});
