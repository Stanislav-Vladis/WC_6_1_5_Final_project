const CLASS_NAME_MENU_ACTIVE = 'menu__active';

const header = document.querySelector('.header');
const headerBurgerButton = header.querySelector('.header__burger');
const headerCloseButton = document.querySelector('.menu__header-close');
const mainMenu = document.querySelector('.menu');

headerBurgerButton.addEventListener('click', function () {
  header.classList.add(CLASS_NAME_MENU_ACTIVE);
  mainMenu.classList.add(CLASS_NAME_MENU_ACTIVE);
});

document.addEventListener('click', function (event) {
  if (mainMenu.classList.contains(CLASS_NAME_MENU_ACTIVE) &&
    !headerBurgerButton.contains(event.target) &&
    !mainMenu.contains(event.target) &&
    !feedback.contains(event.target) &&
    !feedbackCloseButton.contains(event.target) &&
    !backCall.contains(event.target) &&
    !backCallCloseButton.contains(event.target) ||
    event.target === headerCloseButton) {
    header.classList.remove(CLASS_NAME_MENU_ACTIVE);
    mainMenu.classList.remove(CLASS_NAME_MENU_ACTIVE);
  }
});
