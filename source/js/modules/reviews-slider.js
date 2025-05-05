import Swiper from 'swiper';
import { Navigation, Mousewheel } from 'swiper/modules';

const reviewsSlider = new Swiper('.reviews__slider', {
  modules: [Navigation, Mousewheel],
  direction: 'horizontal',
  grabCursor: true,
  allowTouchMove: true,
  centeredSlides: false,
  slidesPerView: 'auto',


  breakpoints: {
    768: {
      spaceBetween: 30,
    },
    1440: {
      spaceBetween: 120,
    }
  },
  navigation: {
    nextEl: '.reviews__slider-button-next',
    prevEl: '.reviews__slider-button-prev',
  },
  mousewheel: {
    forceToAxis: true,
  },
});

export default reviewsSlider;
