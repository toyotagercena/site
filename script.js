document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.navbar-burger');
  const menu = document.getElementById('navMenu');
  const links = document.querySelectorAll('.navbar-item[href^="#"]');

  // Бургер
  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });

  // Клик по меню
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      links.forEach(l => l.classList.remove('current'));
      this.classList.add('current');

      burger.classList.remove('is-active');
      menu.classList.remove('is-active');

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  // Прозрачная шапка при скролле
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('is-scrolled', window.scrollY > 100);
  });
});