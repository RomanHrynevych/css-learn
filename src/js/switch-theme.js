let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};

const startState = window.matchMedia("(prefers-color-scheme: dark)");
setTheme(startState.matches);
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => setTheme(e.matches));

function setTheme(bool) {
  if (bool) {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
  }
}
