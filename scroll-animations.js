// Smooth scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, .group, .masonry-item').forEach(el => {
        el.classList.add('animate-fade');
        observer.observe(el);
    });
});
