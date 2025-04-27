const BREAKPOINT = '(min-width: 1440px)';
const breakpoint = window.matchMedia(BREAKPOINT);
const sliderList = document.querySelector('.adv__slider-list');
const sliders = sliderList.querySelectorAll('.adv__slider-item');

if (breakpoint.matches) {
  cloneSliders();
}

function cloneSliders() {
  if (window.matchMedia(BREAKPOINT).matches) {
    if (sliders.length <= 5) {
      sliders.forEach(
        (item) => {
          const virtualSlide = item.cloneNode(true);
          sliderList.appendChild(virtualSlide);
        }
      );
    }
  }
}

breakpoint.addEventListener('change', cloneSliders);

