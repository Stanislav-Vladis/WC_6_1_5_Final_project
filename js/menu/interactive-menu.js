const CLASS_NAME_ACTIVE = 'menu__active';

const header = document.querySelector('.header');
const headerBurgerButton = header.querySelector('.header__burger');
const closeButton = document.querySelector('.menu__header-close');
const mainMenu = document.querySelector('.menu');

headerBurgerButton.addEventListener('click', function () {
  header.classList.add(CLASS_NAME_ACTIVE);
  mainMenu.classList.add(CLASS_NAME_ACTIVE);
});

document.addEventListener('click', function (event) {
  if (mainMenu.classList.contains(CLASS_NAME_ACTIVE) &&
    !headerBurgerButton.contains(event.target) &&
    !mainMenu.contains(event.target) &&
    window.innerWidth < 1120 ||
    event.target === closeButton) {
    header.classList.remove(CLASS_NAME_ACTIVE);
    mainMenu.classList.remove(CLASS_NAME_ACTIVE);
  }
});
