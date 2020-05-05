var link = document.querySelector(".btn-contackts");
var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");

link.addEventListener("click", function (evt){
  evt.preventDefault();
  popup.classList.add("modal-show");
});
