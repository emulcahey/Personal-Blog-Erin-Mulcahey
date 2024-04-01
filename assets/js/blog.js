function lightDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode-body");
    element = document.querySelector(".navBoxBorder");
    element.classList.toggle("dark-mode-navBoxBorder");
}