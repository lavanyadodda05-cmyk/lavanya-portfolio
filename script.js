const themeButton = document.querySelector(".theme-toggle");

if (themeButton) {
  themeButton.addEventListener("click", () => {
    const isLight = document.documentElement.dataset.theme === "light";
    document.documentElement.dataset.theme = isLight ? "dark" : "light";
    themeButton.setAttribute("aria-pressed", String(!isLight));
    themeButton.setAttribute("aria-label", isLight ? "Switch to light theme" : "Switch to dark theme");
  });
}

const year = document.querySelector("#current-year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}
