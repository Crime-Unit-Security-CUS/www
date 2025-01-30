document.addEventListener("DOMContentLoaded", function () {
    console.log("Crime Unit Security Website Loaded");

    // Dark Mode Toggle
    const toggleBtn = document.getElementById("dark-mode-toggle");
    const isDarkMode = localStorage.getItem("dark-mode");

    if (isDarkMode === "enabled") {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️ Light Mode";
    }

    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            toggleBtn.textContent = "☀️ Light Mode";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            toggleBtn.textContent = "🌙 Dark Mode";
        }
    });

    // Update Footer Year
    document.getElementById("year").textContent = new Date().getFullYear();
});
