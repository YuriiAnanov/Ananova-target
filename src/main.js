import './styles/main.css';
import { initNavigation } from './js/navigation.js';
import { initHero } from './js/hero.js';
import { initAnimations } from './js/animations.js';
import { initParallax } from './js/parallax.js';
import { initSwiper } from './js/swiper-init.js';
import { initForm } from './js/form.js';
import { initLang } from './js/lang.js';

document.addEventListener('DOMContentLoaded', () => {
  initLang();
  initNavigation();
  initHero();
  initAnimations();
  initParallax();
  initSwiper();
  initForm();
});




