export function initNavigation() {
  const header = document.getElementById('header');
  const burgerBtn = document.getElementById('burger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-close');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');
 
  let lastScrollY = window.scrollY;
 
  // 1. Header scroll behavior
  function onScroll() {
    const currentScrollY = window.scrollY;
 
    // Background change when scrolling down from top
    if (currentScrollY > 80) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
 
    // Hide on scroll down, show on scroll up
    if (currentScrollY > lastScrollY && currentScrollY > 150) {
      header.classList.add('header-hidden');
    } else {
      header.classList.remove('header-hidden');
    }
 
    lastScrollY = currentScrollY;
    highlightActiveSection();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
 
  // 2. Burger menu toggle
  function openMenu() {
    mobileMenu.classList.add('is-open');
    burgerBtn.classList.add('is-open');
    burgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    burgerBtn.classList.remove('is-open');
    burgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.contains('is-open') ? closeMenu() : openMenu();
  });
  if (mobileClose) mobileClose.addEventListener('click', closeMenu);
 
  // 3. Smooth scroll — mobile nav links
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        closeMenu();
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 300);
      }
    });
  });
 
  // 4. Smooth scroll — desktop nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
 
  // 5. Active section highlight
  function highlightActiveSection() {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) current = section.id;
    });
    navLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('is-active', href === current);
    });
  }
}
