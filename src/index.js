document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const ulInput = document.getElementById("tasks");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(params);
  });
});



// const input = document.getElementById('input');
// input.addEventListener('click', function(event) {
//   alert('I was clicked!');
// });


// var form = document.querySelector("form");
// form.addEventListener("submit", function(event) {
//   console.log("Saving value", form.elements.value.value);
//   event.preventDefault();
// });

// document.querySelector("#id-checkbox").addEventListener("click", function(event) {
//   document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
//   event.preventDefault();
// }, false);
