<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Каталог гаджетов и аксессуаров PlayTable: смартфоны, наушники, умные часы, аксессуары.">
  <title>Каталог — PlayTable</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
  <a href="#main-content" class="skip-link">Перейти к основному содержимому</a>

  <header class="site-header">
    <div class="site-header__inner">
      <a class="site-header__logo" href="index.html">PlayTable</a>
      <nav class="site-nav" aria-label="Основная навигация">
        <ul class="site-nav__list">
          <li class="site-nav__item"><a class="site-nav__link" href="index.html">Главная</a></li>
          <li class="site-nav__item"><a class="site-nav__link site-nav__link--active" href="catalog.html">Каталог</a></li>
          <li class="site-nav__item"><a class="site-nav__link" href="product.html">Товар</a></li>
          <li class="site-nav__item"><a class="site-nav__link" href="order.html">Заявка</a></li>
          <li class="site-nav__item"><a class="site-nav__link" href="contacts.html">Контакты</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="main-content">
    <nav class="breadcrumbs" aria-label="Хлебные крошки">
      <a class="breadcrumbs__link" href="index.html">Главная</a> /
      <span class="breadcrumbs__current">Каталог</span>
    </nav>

    <div class="catalog-layout">
      <!-- Фильтры -->
      <aside class="catalog-filters">
        <h2 class="catalog-filters__title">Фильтры</h2>
        
        <div class="catalog-filters__group" style="margin-bottom: 15px;">
          <label for="search-input" style="display:block; margin-bottom: 5px; font-weight: bold;">Поиск:</label>
          <input type="text" id="search-input" class="catalog-filters__input" placeholder="Название..." style="width:100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
        </div>

        <div class="catalog-filters__group" style="margin-bottom: 15px;">
          <label for="category-select" style="display:block; margin-bottom: 5px; font-weight: bold;">Категория:</label>
          <select id="category-select" class="catalog-filters__input" style="width:100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
            <option value="all">Все товары</option>
            <option value="smartphones">Смартфоны</option>
            <option value="audio">Аудио</option>
            <option value="wearables">Умные часы</option>
            <option value="accessories">Аксессуары</option>
          </select>
        </div>

        <div class="catalog-filters__group" style="margin-bottom: 15px;">
          <label for="sort-select" style="display:block; margin-bottom: 5px; font-weight: bold;">Сортировка:</label>
          <select id="sort-select" class="catalog-filters__input" style="width:100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
            <option value="default">По умолчанию</option>
            <option value="price-asc">Цена (по возрастанию)</option>
            <option value="price-desc">Цена (по убыванию)</option>
            <option value="name">По названию (А-Я)</option>
          </select>
        </div>
      </aside>

      <!-- Контейнер для карточек, которые сгенерирует JS -->
      <section class="catalog">
        <h1 class="section__title">Каталог товаров</h1>
        <!-- Карточки будут вставлены сюда скриптом -->
        <div class="product-grid"></div>
      </section>
    </div>
  </main>

  <footer class="site-footer">
    <p class="site-footer__text">© 2026 PlayTable. Контрольная работа №4.</p>
  </footer>

  <button class="to-top" id="toTop" aria-label="Наверх">↑</button>
  
  <!-- Подключение скриптов (строго в этом порядке) -->
  <script src="js/data.js"></script>
  <script src="js/catalog.js"></script>
  <script src="js/main.js"></script>
</body>
</html>