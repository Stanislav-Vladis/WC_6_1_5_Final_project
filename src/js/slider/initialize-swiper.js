import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export function initialSwiper() {

  if (window.innerWidth <= 768) {
    const swiperForBrands = new Swiper(".main__brands-swiper", {
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        el: ".main__brands-swiper-pagination",
        clickable: true,
      },
      width: 240
    });

    const swiperForEquipment = new Swiper(".main__equipment-swiper", {
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        el: ".main__equipment-swiper-pagination",
        clickable: true,
      },
      width: 240
    });

    const swiperForPrice = new Swiper(".main__price-swiper", {
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        el: ".main__price-swiper-pagination",
        clickable: true,
      },
      width: 260
    });
  }
}
