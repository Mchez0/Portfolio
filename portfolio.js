document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navPlaceholder = document.querySelector(".nav-placeholder");

    menuToggle.addEventListener("click", function() {
        const navLinks = document.querySelector(".nav-links");
        navLinks.classList.toggle("active");
    });

    navPlaceholder.addEventListener("click", function() {
        navPlaceholder.classList.toggle("clicked");
    });
});
