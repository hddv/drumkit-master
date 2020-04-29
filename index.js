// alert("hello")
let drumButton = document.querySelectorAll("button.drum");

drumButton.forEach(button => {
  button.addEventListener("click", function(){alert("button clicked")})
});
