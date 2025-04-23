import Swiper from 'swiper';
import { Navigation, Mousewheel } from 'swiper/modules';

const advSlider = new Swiper('.adv__slider', {
  modules: [Navigation, Mousewheel],
  direction: 'horizontal',
  grabCursor: true,
  allowTouchMove: false,
  centeredSlides: false,
  slidesPerView: 'auto',


  breakpoints: {
    1440: {
      spaceBetween: 30,
    }
  },
  navigation: {
    nextEl: '.adv__slider-button-next',
    prevEl: '.adv__slider-button-prev',
  },
  mousewheel: {
    forceToAxis: true,
  },
});

export default advSlider;
