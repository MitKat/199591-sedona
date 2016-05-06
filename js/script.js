var link = document.querySelector(".btn-search");
var open = document.querySelector(".form-close");

link.addEventListener("click", function(event) {
  event.preventDefault();
  open.classList.toggle("form-open");
});
