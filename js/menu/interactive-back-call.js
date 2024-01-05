const CLASS_NAME_BACK_CALL_ACTIVE = 'back-call__active';

const menuFooterCallButton = document.querySelector('.menu__footer-call');
const backCall = document.querySelector('.back-call');
const backCallCloseButton = document.querySelector('.back-call__close');

menuFooterCallButton.addEventListener('click', function () {
  main.classList.add(CLASS_NAME_MENU_ACTIVE_OPACITY);
  header.classList.add(CLASS_NAME_MENU_ACTIVE_OPACITY);
  mainMenu.classList.add(CLASS_NAME_MENU_ACTIVE_OPACITY);
  backCall.classList.add(CLASS_NAME_BACK_CALL_ACTIVE);
});

document.addEventListener('click', function (event) {
  if (backCall.classList.contains(CLASS_NAME_BACK_CALL_ACTIVE) &&
    !menuFooterCallButton.contains(event.target) &&
    !backCall.contains(event.target) &&
    window.innerWidth < 1120 ||
    event.target === backCallCloseButton) {
    main.classList.remove(CLASS_NAME_MENU_ACTIVE_OPACITY);
    header.classList.remove(CLASS_NAME_MENU_ACTIVE_OPACITY);
    mainMenu.classList.remove(CLASS_NAME_MENU_ACTIVE_OPACITY);
    backCall.classList.remove(CLASS_NAME_BACK_CALL_ACTIVE);
  }
});
