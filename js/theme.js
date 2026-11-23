// Loaded in <head> before the page renders, so a saved dark theme
// is applied without a flash of the light theme. Light is the default.
(function () {
  var saved = null;
  try {
    saved = localStorage.getItem("theme");
  } catch (e) {
    // Storage can be blocked (private mode); fall back to light.
  }
  if (saved === "dark") document.documentElement.classList.add("dark");
})();
