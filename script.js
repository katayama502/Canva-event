document.addEventListener('DOMContentLoaded', () => {
    // Select elements to animate
    const animatedElements = document.querySelectorAll('.hero-content, .hero-image, .intro-body, .detail-item, .timeline-item, .cta-box');

    // Add initial class for styling
    animatedElements.forEach(el => {
        el.classList.add('slide-up');
    });

    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visible?
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Adjust trigger point slightly
    });

    // Observe elements
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    console.log('Animation observer initialized.');
});
