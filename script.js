
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

function closeMenu() {
    navigation.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Відкрити меню");
}

// Відкриття та закриття меню
menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Закрити меню" : "Відкрити меню"
    );
});

// Закриття після вибору секції
document.querySelectorAll(".navigation a").forEach(link => {
    link.addEventListener("click", closeMenu);
});

// Закриття клавішею Escape
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeMenu();
    }
});

const sections = document.querySelectorAll(
    ".about, .projects, .services, .contacts"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.classList.add("reveal");
        observer.observe(section);
    });
}
