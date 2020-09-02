document.addEventListener("DOMContentLoaded", () => {
  // your code here
	document.querySelector("#create-task-form").addEventListener("submit", function(event) {
		const task = document.getElementById("new-task-description").value;
		addTask(task);
		document.getElementById("create-task-form").reset();

		event.preventDefault();
	});

	function addTask(task) {
		const ul = document.getElementById("tasks");
		const li = document.createElement("li");
		li.appendChild(document.createTextNode(task));
		const button = document.createElement("button");
		button.innerHTML = "remove";
		li.appendChild(button);
		ul.appendChild(li);
	};
});
