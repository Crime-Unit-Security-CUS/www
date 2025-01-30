document.addEventListener("DOMContentLoaded", function () {
    console.log("Crime Unit Security Website Loaded");

    // Smooth scrolling for navigation links
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

    // Form Validation & Submission
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
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }

    // Fade-in Animation on Scroll
    const sections = document.querySelectorAll("section");

    function fadeInOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.85) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Trigger on page load

    // Dynamic Year in Footer
    document.querySelector(".footer p").innerHTML = `&copy; ${new Date().getFullYear()} Crime Unit Security. All Rights Reserved.`;
});
