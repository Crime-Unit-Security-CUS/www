document.addEventListener("DOMContentLoaded", function () {
    console.log("Crime Unit Security Website Loaded Successfully");

    /** DARK MODE TOGGLE **/
    const toggleBtn = document.getElementById("dark-mode-toggle");
    const isDarkMode = localStorage.getItem("dark-mode");

    // Apply stored dark mode preference
    if (isDarkMode === "enabled") {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️ Light Mode";
    } else {
        document.body.classList.remove("dark-mode");
        toggleBtn.textContent = "🌙 Dark Mode";
    }

    // Toggle dark mode
    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            toggleBtn.textContent = "☀️ Light Mode";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            toggleBtn.textContent = "🌙 Dark Mode";
        }

        // Ensure Hero Banner Text Adapts Correctly
        adjustHeroTextColor();
    });

    /** HERO BANNER TEXT COLOR FIX **/
    function adjustHeroTextColor() {
        const heroTitle = document.querySelector(".hero h1");
        if (document.body.classList.contains("dark-mode")) {
            heroTitle.style.color = "white";
        } else {
            heroTitle.style.color = "black";
        }
    }
    adjustHeroTextColor(); // Run on page load

    /** SMOOTH SCROLLING FOR NAVIGATION **/
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

    /** LAZY LOADING IMAGES **/
    const lazyImages = document.querySelectorAll("img.lazy-load");

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove("lazy-load");
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    /** DYNAMIC FOOTER YEAR **/
    document.getElementById("year").textContent = new Date().getFullYear();

    /** CONTACT FORM VALIDATION **/
    const contactForm = document.querySelector("form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.querySelector("input[type='text']").value.trim();
        const email = document.querySelector("input[type='email']").value.trim();
        const message = document.querySelector("textarea").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields before submitting.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you for reaching out! We will get back to you shortly.");
        contactForm.reset();
    });

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

});
