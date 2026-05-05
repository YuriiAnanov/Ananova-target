export function initSwiper() {
  // Перевіряємо чи є Swiper глобально (підключений через CDN)
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper not loaded');
    return;
  }
 
  new Swiper('.testimonials-swiper', {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 24,
    slidesPerView: 1,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768:  { slidesPerView: 2, centeredSlides: false },
      1280: { slidesPerView: 3, centeredSlides: false },
    },
  });
}
