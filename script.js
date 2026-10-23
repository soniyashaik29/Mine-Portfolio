// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a, .btn[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      // Offset for fixed navbar
      const headerOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Intersection Observer for fade-in animations on scroll
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply animation to sections and cards
document.querySelectorAll('.section, .skill-card, .project-card, .timeline-item').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});