// Animación de aparición al hacer scroll (Reveal Effect)
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal, .product-card');
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].style.opacity = "1";
            reveals[i].style.transform = "translateY(0)";
        }
    }
}

// Navbar efecto sticky y cambio de color
window.onscroll = function() {
    const nav = document.querySelector('.navbar');
    if (window.pageYOffset > 100) {
        nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        nav.style.padding = "10px 5%";
    } else {
        nav.style.boxShadow = "none";
        nav.style.padding = "20px 5%";
    }
};

// Inicializar estilos para animación
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.reveal, .product-card');
    elements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
    });
});
