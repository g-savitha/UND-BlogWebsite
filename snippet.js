// Toggles the dark theme manually
const toggleButton = document.querySelector(".theme_button");
toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    toggleButton.style.backgroundImage = "url('assets/icons/moon.png')";
  } else {
    toggleButton.style.backgroundImage = "url('assets/icons/sun.png')";
  }
});
