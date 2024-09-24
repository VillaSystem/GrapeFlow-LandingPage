// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Actualizar el año en el pie de página
    const currentYearSpan = document.getElementById('current-year') as HTMLSpanElement | null;
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear().toString();
    }

    // Navegación suave
    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href') as string);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contact-form') as HTMLFormElement | null;
    if (contactForm) {
        contactForm.addEventListener('submit', (e: Event) => {
            e.preventDefault();
            // Para este ejemplo, solo mostraremos un mensaje de alerta
            alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
            contactForm.reset();
        });
    }

    // Animación para los botones CTA
    const ctaButtons = document.querySelectorAll<HTMLButtonElement>('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        button.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Lazy loading para imágenes (si el navegador lo soporta)
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll<HTMLImageElement>('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src || '';
        });
    } else {
        // Fallback para navegadores que no soportan lazy loading
    }

    const scrollRevealOption = {
        distance: '50px',
        origin: 'bottom',
        duration: 1000,
    };

    ScrollReveal().reveal("h1", {
        ...scrollRevealOption,
        origin: "right",
    });

    ScrollReveal().reveal("ul", {
        ...scrollRevealOption,
        origin: "right",
        delay: 500,
    });

    ScrollReveal().reveal(".logo", {
        ...scrollRevealOption,
        origin: "right",
        delay: 500,
    });

    ScrollReveal().reveal("#hero button", {
        ...scrollRevealOption,
        origin: "right",
        delay: 750,
    });
});
