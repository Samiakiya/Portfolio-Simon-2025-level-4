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