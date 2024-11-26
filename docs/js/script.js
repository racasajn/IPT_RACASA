// Add scroll animation for sections
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => {
    observer.observe(section);
});

// JavaScript to remove the hidden class after the page loads
window.addEventListener('load', function() {
    document.body.classList.remove('hidden');
});

