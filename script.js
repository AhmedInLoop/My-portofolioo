document.addEventListener('DOMContentLoaded', () => {

  // --- Footer year ---
  document.getElementById('year').textContent = new Date().getFullYear();

  // --- Typing effect for hero name ---
  const typedEl = document.getElementById('typedName');
  const fullText = 'Ahmed Maged';
  let i = 0;

  function typeChar() {
    if (i <= fullText.length) {
      typedEl.textContent = fullText.slice(0, i);
      i++;
      setTimeout(typeChar, 90);
    } else {
      typedEl.style.borderRight = '2px solid transparent';
    }
  }
  typeChar();

  // --- Tab navigation (click to scroll) ---
  const tabs = document.querySelectorAll('.tab');
  const sections = document.querySelectorAll('.section');
  const tabsContainer = document.getElementById('tabs');
  const menuToggle = document.getElementById('menuToggle');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.getElementById(tab.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      tabsContainer.classList.remove('open');
    });
  });

  menuToggle.addEventListener('click', () => {
    tabsContainer.classList.toggle('open');
  });

  // --- Scroll-spy: highlight active tab based on section in view ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        tabs.forEach(tab => {
          tab.classList.toggle('active', tab.dataset.target === id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

  sections.forEach(section => observer.observe(section));

});
