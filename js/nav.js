const navToggle = document.querySelector('.nav-toggle');
const navUl = document.querySelector('nav ul');
if (navToggle && navUl) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navUl.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', navUl.classList.contains('open'));
  });
}