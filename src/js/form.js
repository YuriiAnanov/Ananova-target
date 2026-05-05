export function initForm() {
  const form = document.getElementById('contact-form');
  const successEl = document.getElementById('form-success');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnLoader = document.getElementById('btn-loader');
  if (!form) return;
 
  const validators = {
    required: (val) => val.trim() !== '',
    email: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()),
    minLength: (val, len) => val.trim().length >= parseInt(len),
  };
 
  const messages = {
    required: { en: 'This field is required', ua: 'Це поле обов\'язкове' },
    email:    { en: 'Enter a valid email address', ua: 'Введіть коректну email-адресу' },
    minLength:{ en: (n) => `Minimum ${n} characters`, ua: (n) => `Мінімум ${n} символів` },
  };
 
  function getLang() {
    return localStorage.getItem('ananova-lang') || 'en';
  }
 
  function validateField(input) {
    const rules = input.dataset.validate?.split('|') || [];
    const errorEl = document.getElementById(`${input.id}-error`);
    let isValid = true;
    let errorMsg = '';
 
    for (const rule of rules) {
      const [name, param] = rule.split(':');
      const valid = validators[name]?.(input.value, param);
      if (!valid) {
        isValid = false;
        const lang = getLang();
        const msg = messages[name]?.[lang];
        errorMsg = typeof msg === 'function' ? msg(param) : (msg || 'Invalid');
        break;
      }
    }
 
    if (errorEl) errorEl.textContent = errorMsg;
    input.classList.toggle('is-error', !isValid);
    input.classList.toggle('is-valid', isValid && input.value.trim() !== '');
    return isValid;
  }
 
  // Real-time validation on blur
  form.querySelectorAll('[data-validate]').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('is-error')) validateField(input);
    });
  });
 
  // Submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fields = form.querySelectorAll('[data-validate]');
    let allValid = true;
    fields.forEach(field => {
      if (!validateField(field)) allValid = false;
    });
    if (!allValid) return;
 
    // Loading state
    submitBtn.disabled = true;
    btnText.classList.add('hidden');
    btnLoader.classList.remove('hidden');
 
    // Simulate API call
    setTimeout(() => {
      // Hide form, show success
      form.style.transition = 'opacity 0.4s ease';
      form.style.opacity = '0';
      setTimeout(() => {
        form.classList.add('hidden');
        successEl.classList.remove('hidden');
        successEl.classList.add('flex');
      }, 400);
    }, 1600);
  });
}
