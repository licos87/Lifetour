const btn = document.querySelector('.header__burger-btn');
const menu = document.querySelector('.header__nav-list');

btn.addEventListener('click', () => {
  btn.classList.toggle('header__burger-btn--open');
  menu.classList.toggle('header__nav-list--open');
});
