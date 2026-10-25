// Show the current year in the footer.
document.querySelector("#year").textContent = new Date().getFullYear();

// Show the button after scrolling down, then smoothly return to the top.
const backToTopButton = document.querySelector("#backToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
