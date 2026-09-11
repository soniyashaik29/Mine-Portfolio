/* =========================================================
   PORTFOLIO INTERACTIVITY – SONIYA SHAIK
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ----- 1. SMOOTH SCROLL WITH NAVBAR OFFSET ----- */
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const navbar = document.querySelector('.navbar');

  anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight - 10;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        history.pushState(null, null, targetId);
      }
    });
  });

  /* ----- 2. ACTIVE NAV LINK ON SCROLL ----- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function setActiveLink() {
    let currentSection = '';
    const scrollPos = window.pageYOffset + 120;

    sections.forEach(section => {
      if (scrollPos >= section.offsetTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href').replace('#', '');
      if (href === currentSection) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);
  setActiveLink();

  /* ----- 3. FADE-IN ANIMATION ON SCROLL ----- */
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animateElements = document.querySelectorAll(
    '.about-card, .skill-card, .project-card, .edu-item, .contact-item, .resume-block'
  );

  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  /* ----- 4. DYNAMIC YEAR IN FOOTER ----- */
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  /* ----- 5. CONSOLE WELCOME MESSAGE ----- */
  console.log(
    '%c✨ Soniya Shaik Portfolio',
    'color: #2563eb; font-size: 16px; font-weight: bold;'
  );
  console.log(
    '%cAspiring Data Analyst & AI Tools Builder',
    'color: #7c3aed; font-size: 12px;'
  );
});