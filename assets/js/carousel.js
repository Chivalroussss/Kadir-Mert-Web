// Testimonials Carousel JavaScript
let currentSlide = 0;
const totalSlides = 5;

function moveCarousel(direction) {
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    if (currentSlide >= totalSlides) currentSlide = 0;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function updateCarousel() {
    const track = document.querySelector('.carousel-track');
    const dots = document.querySelectorAll('.carousel-dots .dot');

    if (track) {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.style.background = 'var(--secondary-color)';
            dot.classList.add('active');
        } else {
            dot.style.background = 'var(--border-color)';
            dot.classList.remove('active');
        }
    });
}

// Auto-play carousel every 5 seconds
setInterval(() => {
    moveCarousel(1);
}, 5000);

// Hover effects for arrows
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.carousel-prev, .carousel-next').forEach(btn => {
        btn.addEventListener('mouseenter', function () {
            this.style.background = 'var(--secondary-color)';
            this.style.color = '#fff';
            this.style.borderColor = 'var(--secondary-color)';
        });
        btn.addEventListener('mouseleave', function () {
            this.style.background = 'var(--card-bg)';
            this.style.color = 'var(--text-primary)';
            this.style.borderColor = 'var(--border-color)';
        });
    });
});
