document.addEventListener("DOMContentLoaded", handleEverything);

function handleEverything(event) {
	let form = document.querySelector("#create-task-form");
	form.addEventListener("submit", handleFormSubmit);
}

function handleFormSubmit(event) {
	event.preventDefault();
	let todoitem = event.target["new-task-description"].value;

	let tasks = document.querySelector("#tasks");
	let li = document.createElement("li");
	let button = document.createElement("button");
	button.innerText = "Delete";
	button.id = "delete";
	li.innerText = todoitem;
	tasks.appendChild(li);
	li.appendChild(button);

	button.addEventListener("click", handleDelete);
}

function handleDelete(event) {
	let parent = event.target.parentNode;
	parent.parentNode.removeChild(parent)
};