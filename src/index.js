document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form")
	form.addEventListener("submit", function(event) {
		event.preventDefault()	
		
		let des = document.querySelector("#new-task-description")
		let list = document.querySelector("#tasks")

		let newTask = document.createElement("li")
		newTask.textContent = des.value

		list.appendChild(newTask)


	})
});
