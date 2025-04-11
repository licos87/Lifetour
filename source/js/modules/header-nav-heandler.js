const navList = document.querySelector('.header__nav-list');
const navBtn = document.querySelector('.header__burger-btn');

function closeNavHandler(e) {
  if (e.target.classList.contains('header__nav-link')) {
    navList.classList.remove('header__nav-list--open');
    document.body.style.overflow = 'auto';
  }
}

function navMenuHandler(e) {
  if (navList.classList.contains('header__nav-list--open')) {
    navList.classList.remove('header__nav-list--open');
    navList.removeEventListener('click', () => closeNavHandler(e));
    document.body.style.overflow = 'auto';
  } else {
    navList.classList.add('header__nav-list--open');
    navList.addEventListener('click', closeNavHandler);
    document.body.style.overflow = 'hidden';
  }
}

navBtn.addEventListener('click', (e) => navMenuHandler(e));

