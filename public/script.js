console.log("hello");
const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", (e) => {
  menu.classList.toggle("hidden");
});
