function scrollToSection(id) {
    const el = document.getElementById(id);
    if(el) {
      el.focus();
      el.scrollIntoView({behavior: 'smooth'});
    }
  }


  function submitForm(event) {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const message = event.target.message.value.trim();


    if(name && email && message) {
      alert(`Bedankt, ${name}! Je bericht is succesvol verzonden.`);
      event.target.reset();
    } else {
      alert('Vul alstublieft alle velden correct in.');
    }
  }
  
  const navToggle = document.querySelector('.nav-toggle');
  const navUl = document.querySelector('nav ul');
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navUl.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', navUl.classList.contains('open'));
  });

  // Vertalingen voor persoonlijke projecten
const translations = {
  nl: {
    'yard-title': 'Psalmen',
    'yard-desc': 'Deze pagina is bedoeld voor zangers voor op het podium. En iedereen mag hem gebruiken.',
    'view-project': 'Bekijk project'
  },
  en: {
    'yard-title': 'መዝሙር',
    'yard-desc': 'እዛ ደረ ገጽ ንዘመርቲ ኣብ መድረኽ ኢለ ዝሰራሕኩዋ እያ። ኩሉ ሰብ ድማ ክጥቀመላ ይኽእል እዩ።',
    'view-project': 'View project'
  }
};