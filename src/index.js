document.addEventListener("DOMContentLoaded", () => {
  // your code here


  const form = document.getElementById('create-task-form');

  form.onsubmit = function(){

    //log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    //preventDefault();

    //select list, create list item
    let uList = document.querySelector('ul');
    let lItem = document.createElement('li');

    //select text from form, add to list item text container
    let formContent = document.getElementById("new-task-description");
    let lItemText = document.createTextNode(formContent.value);

    //add list item text container to list item
    //add list item to list container
    lItem.appendChild(lItemText);
    uList.appendChild(lItem);

    return false; //so it doesn't post to action
  }
});
