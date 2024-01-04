const brandsSwiperWrapper = document.querySelector('.main__brands-swiper-wrapper');
const brandsShowAllBlock = document.querySelector('.main__brands-show-all');
const brandsShowAllButton = brandsShowAllBlock.querySelector('.main__show-all-button');

brandsShowAllButton.addEventListener('click', function () {
  if (!brandsShowAllBlock.classList.contains('main__brands-show-all_enable')) {
    displayBrands();
  } else {
    hideBrands();
  }
});

function displayBrands() {
  brandsShowAllButton.textContent = 'Скрыть';
  brandsShowAllBlock.classList.add('main__brands-show-all_enable');
  brandsSwiperWrapper.classList.add('main__brands-show-all_enable');
}

function hideBrands() {
  brandsShowAllButton.textContent = 'Показать все';
  brandsShowAllBlock.classList.remove('main__brands-show-all_enable');
  brandsSwiperWrapper.classList.remove('main__brands-show-all_enable');
}
