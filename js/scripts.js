document.querySelector(".hamBtn").addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("show");
});
document.querySelector(".nav").addEventListener("click", function () {
  document.querySelector("nav").classList.remove("show");
});
