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

  pagination: {
    el: '.hero__swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  mousewheel: {
    forceToAxis: true,
  },
});

heroSlider.init();
