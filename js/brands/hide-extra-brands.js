import {isInnerWidthLessThan, isInnerWidthMoreThan} from "../utils/utils.js";

export const slides = document.querySelectorAll('.container__brands-swiper-slide');

window.addEventListener('DOMContentLoaded', hideExtraBrands);

export function hideExtraBrands() {
  if (isInnerWidthMoreThan(768) && isInnerWidthLessThan(992)) hideBrands(slides, 6);
  if (isInnerWidthMoreThan(992)) hideBrands(slides, 8);

  function hideBrands(slides, startWithIndex) {
    for (let i = startWithIndex; i < slides.length; i++) {
      slides[i].classList.add('container__brands-swiper-slide-disable')
    }
  }
}
