document.addEventListener("DOMContentLoaded", () => {
  const tags = document.getElementsByTagName("input");
	tags[1].addEventListener("click", function (event) {
		event.preventDefault();
		const newTaskDescription = document.getElementById("new-task-description");
		const newTask = document.createElement("li");
		const ul = document.getElementById("tasks");
		newTask.innerText = newTaskDescription.value;
		ul.appendChild(newTask);
		newTaskDescription.value = "";
	});
});
