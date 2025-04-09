import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const heroSlider = new Swiper(".hero__slider", {
  modules: [Navigation, Pagination],
  direction: "horizontal",
  loop: true,
  grabCursor: true,
  allowTouchMove: true,
  slidesPerView: 1,

  breakpoints: {
    1440: {
      slidesPerView: 1,
      allowTouchMove: false,
    }
  },

  navigation: {
    nextEl: ".hero__slider-next",
    prevEl: ".hero__slider-prev",
  },
  pagination: {
    el: ".hero__slider-pagination",
    type: "bullets",
    clickable: true,
  }
});
