import { Navigation } from 'swiper/modules';
import { resizableSlider } from './adv-slider';

const BREAKPOINT = '(max-width: 1439px)';

const sliderSettings = {
  modules: [Navigation],
  direction: 'horizontal',
  grabCursor: true,
  spaceBetween: 2,
  loop: true,
  speed: 800,
  loopAdditionalSlides: true,
  loopAddBlankSlides: false,

  slidesPerView: 'auto',
  // grid: {
  //   fill: 'columns',
  //   rows: 2,
  // },

  navigation: {
    nextEl: '.gallery__slider-button-next',
    prevEl: '.gallery__slider-button-prev',
  },
};


resizableSlider(BREAKPOINT, '.gallery__slider', sliderSettings);
