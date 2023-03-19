const buttons = document.querySelectorAll("ul li");

buttons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.classList.add("is-active");
  });

  button.addEventListener("mouseup", () => {
    button.classList.remove("is-active");
  });

  button.addEventListener("mouseleave", () => {
    button.classList.remove("is-active");
  });

  button.addEventListener("click", () => {
    button.classList.toggle("is-active");
  });
});
