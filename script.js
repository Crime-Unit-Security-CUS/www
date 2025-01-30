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

    // Smooth Scrolling for Navigation
    const navLinks = document.querySelectorAll(".bx--header__menu-item a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: "smooth"
            });
        });
    });

    // Lazy Loading Images
    const lazyImages = document.querySelectorAll("img.lazy-load");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove("lazy-load");
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => observer.observe(img));

    // Exit Intent Popup
    document.addEventListener("mouseleave", function (e) {
        if (e.clientY < 50) {
            document.getElementById("exit-popup").style.display = "block";
        }
    });

    document.getElementById("close-popup").addEventListener("click", function () {
        document.getElementById("exit-popup").style.display = "none";
    });

    // Dynamic Year in Footer
    document.querySelector(".footer p").innerHTML = `&copy; ${new Date().getFullYear()} Crime Unit Security. All Rights Reserved.`;
});
