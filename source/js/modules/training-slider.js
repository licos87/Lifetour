import Swiper from 'swiper';
import { Navigation, Mousewheel } from 'swiper/modules';

const trainingSlider = new Swiper('.training__slider', {
  modules: [Navigation, Mousewheel],
  direction: 'horizontal',
  grabCursor: true,
  allowTouchMove: true,
  slidesPerView: 1,
  initialSlide: 2,
  spaceBetween: 20,
  centeredSlides: false,

  breakpoints: {
    768: {
      slidesPerView: 3,
      initialSlide: 0,
      allowTouchMove: false,
    },
    1440: {
      slidesPerView: 4,
      initialSlide: 0,
      allowTouchMove: false,
    }
  },

  mousewheel: {
    forceToAxis: true,
  },

  navigation: {
    nextEl: '.slider-button-button-next',
    prevEl: '.slider-button-button-prev',
  },
});

export default trainingSlider;
