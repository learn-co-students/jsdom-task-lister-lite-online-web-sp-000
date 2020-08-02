document.addEventListener("DOMContentLoaded", () => {
  const newUserTask = document.getElementById("new-task-description");
  const submitButton = document.querySelector(
    "#create-task-form input[type='submit']"
  );
  const list = document.getElementById("tasks");

  function clearUserInput() {
    newUserTask.value = "";
  }

  function deleteListItem(listItem) {
    listItem.remove();
  }

  function createListDeleteButton() {
    const deleteButton = document.createElement("button");

    deleteButton.className = "delete";
    deleteButton.textContent = "X";

    deleteButton.addEventListener("click", function (e) {
      e.preventDefault();
      deleteListItem(this.parentElement);
    });

    return deleteButton;
  }

  function addUserTaskToList() {
    const newListItem = document.createElement("li");

    newListItem.textContent = newUserTask.value;

    newListItem.appendChild(createListDeleteButton());
    list.appendChild(newListItem);
  }

  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    addUserTaskToList();
    clearUserInput();
  });
});
