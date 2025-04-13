import Swiper from 'swiper';
import { Navigation, Mousewheel } from 'swiper/modules';

const toursSlider = new Swiper('.tours__slider', {
  modules: [ Navigation, Mousewheel],
  direction: 'horizontal',
  grabCursor: true,
  allowTouchMove: true,
  slidesPerView: 1,
  spaceBetween: 18,

  breakpoints: {
    768: {
      slidesPerView: 2,
      allowTouchMove: false,
    },
    1440: {
      slidesPerView: 3,
      allowTouchMove: false,
      spaceBetween: 30,
    }
  },

  mousewheel: {
    forceToAxis: true,
  },

  navigation: {
    nextEl: '.tours__slider-button-next',
    prevEl: '.tours__slider-button-prev',
  },
});

export default toursSlider;
