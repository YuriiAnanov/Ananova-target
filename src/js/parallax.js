export function initParallax() {
  const parallaxBg = document.getElementById('what-is-target-parallax-bg');
  if (!parallaxBg) return;
 
  // Перевірка: на мобільних вимикаємо для продуктивності
  const isMobile = () => window.innerWidth < 768;
 
  function updateParallax() {
    if (isMobile()) {
      parallaxBg.style.transform = 'scale(1.08)';
      return;
    }
    const section = parallaxBg.closest('.parallax-section');
    const rect = section.getBoundingClientRect();
    const scrolled = -rect.top * 0.35;
    parallaxBg.style.transform = `translate3d(0, ${scrolled}px, 0) scale(1.08)`;
  }
 
  window.addEventListener('scroll', () => {
    requestAnimationFrame(updateParallax);
  }, { passive: true });
 
  updateParallax();
}
