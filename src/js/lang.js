export function initLang() {
  const langBtns = document.querySelectorAll('[data-lang]');
  let currentLang = localStorage.getItem('ananova-lang') || 'en';
 
  function applyLang(lang) {
    // Оновити весь текст
    document.querySelectorAll('[data-en]').forEach(el => {
      const text = el.dataset[lang];
      if (text) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = text;
        } else if (el.innerHTML !== text) {
          el.innerHTML = text;
        }
      }
    });
 
    // Оновити атрибут lang
    document.documentElement.lang = lang;
 
    // Зберегти вибір
    localStorage.setItem('ananova-lang', lang);
 
    // Оновити активну кнопку
    langBtns.forEach(btn => {
      btn.classList.toggle('active-lang', btn.dataset.lang === lang);
    });
  }
 
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
 
  // Застосувати при завантаженні
  applyLang(currentLang);
}
