const modalWrapper = document.querySelector(".modal-wrapper");
const modalClose = document.querySelector(".modal-close");
const body = document.querySelector("body");

body.addEventListener("copy", () => {
  modalWrapper.style.display = "block";
});

modalClose.addEventListener("click", () => {
  modalWrapper.style.display = "none";
});

modalWrapper.addEventListener("click", () => {
  modalWrapper.style.display = "none";
});
