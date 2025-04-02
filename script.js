document.addEventListener("DOMContentLoaded", function() {
    // Effet de transition au scroll
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.2,
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, options);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Effet sur les liens du menu
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
    
    // Bouton retour en haut
    const backToTop = document.createElement("button");
    backToTop.innerHTML = "<i class='fas fa-arrow-up'></i>";
    backToTop.classList.add("back-to-top");
    document.body.appendChild(backToTop);
    
    backToTop.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });
});
