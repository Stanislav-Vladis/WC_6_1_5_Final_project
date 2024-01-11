const CLASS_NAME_FEEDBACK_ACTIVE = 'feedback__active';
const CLASS_NAME_MENU_ACTIVE_OPACITY = 'menu__active-opacity';

const main = document.querySelector('.main');
const menuFooterChatButton = document.querySelector('.menu__footer-chat');
const feedback = document.querySelector('.feedback');
const feedbackCloseButton = document.querySelector('.feedback__close');

menuFooterChatButton.addEventListener('click', function () {
  main.classList.add(CLASS_NAME_MENU_ACTIVE_OPACITY);
  header.classList.add(CLASS_NAME_MENU_ACTIVE_OPACITY);
  mainMenu.classList.add(CLASS_NAME_MENU_ACTIVE_OPACITY);
  feedback.classList.add(CLASS_NAME_FEEDBACK_ACTIVE);
});

document.addEventListener('click', function (event) {
  if (feedback.classList.contains(CLASS_NAME_FEEDBACK_ACTIVE) &&
    !menuFooterChatButton.contains(event.target) &&
    !feedback.contains(event.target) &&
    window.innerWidth < 1120 ||
    event.target === feedbackCloseButton) {
    main.classList.remove(CLASS_NAME_MENU_ACTIVE_OPACITY);
    header.classList.remove(CLASS_NAME_MENU_ACTIVE_OPACITY);
    mainMenu.classList.remove(CLASS_NAME_MENU_ACTIVE_OPACITY);
    feedback.classList.remove(CLASS_NAME_FEEDBACK_ACTIVE);
  }
});
