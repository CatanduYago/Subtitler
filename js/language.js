"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('language-switcher');
    const languageIcon = document.getElementById('language-icon');
    let currentLanguage = 'es';
  
    languageSwitcher.addEventListener('click', () => {
      currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
      languageIcon.src = currentLanguage === 'es' ? './assets/espana.png' : './assets/eeuu.png';
  
      // Actualizar la visibilidad de los elementos según el idioma
      document.querySelectorAll('[data-lang]').forEach(el => {
        const lang = el.getAttribute('data-lang');
        el.style.display = lang === currentLanguage ? '' : 'none';
      });
    });
  });
  