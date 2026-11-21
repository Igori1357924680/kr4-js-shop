// ==========================================
// 1. Логика для модального окна и кнопки "Наверх" (из КР №1)
// ==========================================
const modal = document.getElementById('orderModal');
const openModalBtn = document.getElementById('openModal');

if (modal && openModalBtn) {
  openModalBtn.addEventListener('click', () => modal.showModal());
}

const toTop = document.getElementById('toTop');
if (toTop) {
  window.addEventListener('scroll', () => {
    toTop.classList.toggle('to-top--visible', window.scrollY > 300);
  });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ==========================================
// 2. Запуск каталога (из КР №4)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Проверяем, что мы находимся на странице каталога
  // (ищем контейнер для карточек и поле поиска)
  const isCatalogPage = document.querySelector('.product-grid') && document.querySelector('#search-input');
  
  if (isCatalogPage) {
    // Если мы на странице каталога, вызываем функцию initCatalog()
    // Она находится в файле catalog.js
    initCatalog();
  }
});