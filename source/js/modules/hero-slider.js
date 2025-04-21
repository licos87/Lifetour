import Swiper from 'swiper';
import { Pagination, Mousewheel, EffectFade } from 'swiper/modules';

const heroSlider = new Swiper('.hero__swiper', {
  modules: [Pagination, Mousewheel, EffectFade],
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  allowTouchMove: true,
  slidesPerView: 1,
  effect: 'fade',
  centeredSlides: true,

  fadeEffect: {
    crossFade: true,
  },

  breakpoints: {
    1440: {
      slidesPerView: 1,
      allowTouchMove: false,
    }
  },

  on: {
    slideChange: function () {
      this.slides.forEach((slide, index) => {
        const isActive = index === this.activeIndex;
        slide.querySelectorAll('a, button, input, textarea, select, [tabindex]')
          .forEach((el) => {
            el.tabIndex = isActive ? 0 : -1;
          });
      });
    },
  },

  pagination: {
    el: '.hero__swiper-pagination',
    type: 'bullets',
    clickable: true,
    bulletElement: 'button',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  mousewheel: {
    forceToAxis: true,
  },
});

export default heroSlider;
