const equipmentSwiperWrapper = document.querySelector('.main__equipment-swiper-wrapper');
const equipmentShowAllBlock = document.querySelector('.main__equipment-show-all');
const equipmentShowAllButton = equipmentShowAllBlock.querySelector('.main__show-all-button');

equipmentShowAllButton.addEventListener('click', function () {
  if (!equipmentShowAllBlock.classList.contains('main__equipment-show-all_enable')) {
    displayEquipment();
  } else {
    hideEquipment();
  }
});

function displayEquipment() {
  equipmentShowAllButton.textContent = 'Скрыть';
  equipmentShowAllBlock.classList.add('main__equipment-show-all_enable');
  equipmentSwiperWrapper.classList.add('main__equipment-show-all_enable');
}

function hideEquipment() {
  equipmentShowAllButton.textContent = 'Показать все';
  equipmentShowAllBlock.classList.remove('main__equipment-show-all_enable');
  equipmentSwiperWrapper.classList.remove('main__equipment-show-all_enable');
}
