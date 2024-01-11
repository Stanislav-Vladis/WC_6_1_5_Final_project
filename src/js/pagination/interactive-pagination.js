const paginationItems = document.querySelectorAll('.main__pagination-item');
let activeItem;

paginationItems.forEach(function (item) {
  if (item.classList.contains('main__pagination-item--active')) activeItem = item;

  item.addEventListener('click', function () {
    // Удаляем класс у предыдущего активного элемента
    if (activeItem) {
      activeItem.classList.remove('main__pagination-item--active');
    }
    // Добавляем класс к текущему элементу
    item.classList.add('main__pagination-item--active');
    activeItem = item;
  });
});
