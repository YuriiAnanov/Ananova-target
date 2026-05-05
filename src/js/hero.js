export function initHero() {
  const hero = document.getElementById('hero');
  const bg = document.getElementById('hero-bg');
  const items = hero ? hero.querySelectorAll('.hero-entrance') : [];

  if (!hero) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion) {
    bg?.classList.add('is-loaded');
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  requestAnimationFrame(() => {
    bg?.classList.add('is-loaded');

    items.forEach((item, index) => {
      window.setTimeout(() => {
        item.classList.add('is-visible');
      }, index * 140);
    });
  });
}
