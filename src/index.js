

document.addEventListener("DOMContentLoaded", () => {
  createAllEventListeners();
});

function createAllEventListeners(){
  createFormSubmissionListener();
};

function createFormSubmissionListener(){
  document.getElementById('create-task-form').addEventListener('submit', function(event){
    event.preventDefault();
    submitNewTask();
  });
};

function submitNewTask(){ 
  let newListItem = document.createElement('li');
  newListItem.innerHTML = document.getElementById('new-task-description').value;
  
  document.querySelector("#list ul").appendChild(newListItem);
  clearInputField();
};

function clearInputField(){
  document.getElementById('new-task-description').value="";
}

