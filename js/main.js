document.addEventListener('DOMContentLoaded', () => {
  const topnav = document.getElementById('topnav');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const snapContainer = document.getElementById('snapContainer');
  const progressBar = document.getElementById('progressBar');
  const sections = document.querySelectorAll('.section');
  const navAnchors = document.querySelectorAll('.nav-links a[data-section]');
  const dotAnchors = document.querySelectorAll('.side-nav a[data-section]');
  const yearEl = document.getElementById('year');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  function setActive(id) {
    navAnchors.forEach(a => a.classList.toggle('active', a.dataset.section === id));
    dotAnchors.forEach(a => a.classList.toggle('active', a.dataset.section === id));
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { root: snapContainer, threshold: 0.5 });

  sections.forEach(section => observer.observe(section));

  snapContainer.addEventListener('scroll', () => {
    topnav.classList.toggle('scrolled', snapContainer.scrollTop > 40);

    const scrollable = snapContainer.scrollHeight - snapContainer.clientHeight;
    const progress = scrollable > 0 ? (snapContainer.scrollTop / scrollable) * 100 : 0;
    progressBar.style.width = progress + '%';
  });

  const counters = document.querySelectorAll('.stat-num');
  let counted = false;

  function animateCounters() {
    if (counted) return;
    counted = true;
    counters.forEach(el => {
      const target = parseInt(el.dataset.count, 10);
      const duration = 1400;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.floor(progress * target);
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      }
      requestAnimationFrame(tick);
    });
  }

  const aboutSection = document.getElementById('nosotros');
  if (aboutSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) animateCounters();
      });
    }, { root: snapContainer, threshold: 0.4 });
    statsObserver.observe(aboutSection);
  }

  const playBtn = document.getElementById('playHeroVideo');
  const heroVideo = document.querySelector('.hero-video');
  if (playBtn && heroVideo) {
    playBtn.addEventListener('click', () => {
      heroVideo.muted = false;
      heroVideo.controls = true;
      heroVideo.style.opacity = '1';
      heroVideo.currentTime = 0;
      heroVideo.play();
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Formulario de demostración. Conecta este formulario a tu backend, Formspree o servicio de email para recibir mensajes reales.');
      contactForm.reset();
    });
  }
});
