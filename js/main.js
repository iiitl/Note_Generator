import App from "./App.js";

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

// Add event listener to dark mode toggle button
const darkModeToggle = document.getElementById("dark-mode-toggle");
if (darkModeToggle) {
    darkModeToggle.addEventListener("click", toggleDarkMode);
}

const root = document.getElementById("app");
const app = new App(root);
