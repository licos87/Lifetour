import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const BREAKPOINT = '(min-width: 1440px)';
const sliderList = document.querySelector('.adv__slider-list');
const sliders = sliderList.querySelectorAll('.adv__slider-item');

const resizableSlider = (breakpoint, swiperClass, swiperSettings, callback) => {
  let slider = undefined;

  breakpoint = window.matchMedia(breakpoint);

  const initializeSlider = function (calssName, settings) {
    slider = new Swiper(calssName, settings);

    if (callback) {
      callback(slider);
    }
  };

  const checker = function () {
    if (breakpoint.matches) {
      return initializeSlider(swiperClass, swiperSettings);
    } else {
      if (slider !== undefined) {
        slider.destroy(true, true);
      }
    }
  };

  breakpoint.addEventListener('change', checker);

  checker();
};

const sliderSettings = {
  modules: [Navigation],
  direction: 'horizontal',
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 2,
  spaceBetween: 30,
  loop: true,
  slidesPerView: 'auto',
  slidesPerGroup: 2,
  loopAddBlankSlides: false,
  speed: 800,
  normalizeSlideIndex: false,

  navigation: {
    nextEl: '.adv__slider-button-next',
    prevEl: '.adv__slider-button-prev',
  },

  on: {
    destroy: function () {
      sliderList.innerHTML = '';
      sliders.forEach((item) => {
        sliderList.appendChild(item);
      });
    },
  },
};


resizableSlider(BREAKPOINT, '.adv__slider', sliderSettings);


export { resizableSlider };
