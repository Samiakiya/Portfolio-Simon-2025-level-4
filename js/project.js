const navToggle = document.querySelector('.nav-toggle');
const navUl = document.querySelector('nav ul');
if (navToggle && navUl) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navUl.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', navUl.classList.contains('open'));
  });
}

// Project filter functionaliteit
const projectNavBtns = document.querySelectorAll('.project-nav-btn');
const projectCards = document.querySelectorAll('.project-card');
const languageToggle = document.querySelector('.language-toggle');

projectNavBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');
    
    // Update active button
    projectNavBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Toon/verberg taalschakelaar
    if (category === 'personal') {
      languageToggle.classList.add('show');
    } else {
      languageToggle.classList.remove('show');
      // Reset naar Nederlands wanneer taalschakelaar wordt verborgen
      document.querySelector('.lang-btn[data-lang="nl"]').click();
    }
    
    // Filter projects
    projectCards.forEach(card => {
      if (category === 'all') {
        card.classList.remove('hidden');
      } else if (card.classList.contains(category)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

  // Vertalingen voor persoonlijke projecten
const translations = {
  nl: {
    'yard-title': 'Psalmen',
    'yard-desc': 'Deze pagina is bedoeld voor zangers voor op het podium. En iedereen mag hem gebruiken.',
    'view-project': 'Bekijk project'
  },
  eri: {
    'yard-title': 'መዝሙር',
    'yard-desc': 'እዛ ደረ ገጽ ንዘመርቲ ኣብ መድረኽ ኢለ ዝሰራሕኩዋ እያ። ኩሉ ሰብ ድማ ክጥቀመላ ይኽእል እዩ።',
    'view-project': 'ተመልከት ፕሮጀክት'
  }
};
// Taalwisseling functionaliteit
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Update teksten
    Object.keys(translations[lang]).forEach(key => {
      const element = document.querySelector(`[data-translate="${key}"]`);
      if (element) {
        element.textContent = translations[lang][key];
      }
    });
  });
});

console.log('JavaScript is geladen!');
alert('JavaScript werkt!');
