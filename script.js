function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const scrollTopButton = document.querySelector("#scroll-top");
const navbars = document.querySelectorAll("#desktop-nav, #hamburger-nav");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

function updateScrollState() {
    const isScrolled = window.scrollY > 80;
    scrollTopButton.classList.toggle("visible", isScrolled);
    navbars.forEach((navbar) => navbar.classList.toggle("scrolled", isScrolled));

    let currentSection = "about";
    sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 180) currentSection = section.id;
    });
    navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${currentSection}`));
}

window.addEventListener("scroll", updateScrollState, { passive: true });
scrollTopButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
updateScrollState();
