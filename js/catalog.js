// Функция для создания HTML-карточки товара
function createProductCard(product) {
  const article = document.createElement('article');
  article.classList.add('product-card');

  const badge = document.createElement('span');
  badge.classList.add('product-card__badge');
  badge.textContent = product.isAvailable ? 'В наличии' : 'Нет в наличии';
  
  if (!product.isAvailable) {
    badge.style.backgroundColor = 'var(--color-danger)';
  }

  const title = document.createElement('h3');
  title.classList.add('product-card__title');
  title.textContent = product.title;

  const desc = document.createElement('p');
  desc.classList.add('product-card__description');
  desc.textContent = product.description;

  const price = document.createElement('p');
  price.classList.add('product-card__price');
  price.textContent = new Intl.NumberFormat('ru-RU').format(product.price) + ' ₽';

  const btn = document.createElement('a');
  btn.classList.add('button', 'button--primary', 'product-card__button');
  btn.textContent = 'Подробнее';
  btn.href = 'product.html';

  // Кнопка "В корзину"
  const cartBtn = document.createElement('button');
  cartBtn.classList.add('button', 'button--ghost', 'product-card__button');
  cartBtn.textContent = 'В корзину';
  cartBtn.style.marginTop = '10px';
  cartBtn.addEventListener('click', () => addToCart(product.id));

  article.append(badge, title, desc, price, btn, cartBtn);
  return article;
}

// Функция для отрисовки каталога
function renderCatalog(productsArray) {
  const container = document.querySelector('#product-grid'); // Берем по id
  if (!container) return; 

  container.innerHTML = ''; 

  if (productsArray.length === 0) {
    const msg = document.createElement('p');
    msg.textContent = 'Товары не найдены.';
    container.append(msg);
    return;
  }

  productsArray.forEach(product => {
    const card = createProductCard(product);
    container.append(card);
  });
}

// --- Инициализация фильтров ---
function initCatalog() {
  const searchInput = document.querySelector('#search-input');
  const categorySelect = document.querySelector('#category-select');
  const sortSelect = document.querySelector('#sort-select');

  if (!searchInput || !categorySelect || !sortSelect) return;

  function updateCatalog() {
    let filtered = [...products];

    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
      filtered = filtered.filter(p => p.title.toLowerCase().includes(searchTerm));
    }

    const category = categorySelect.value;
    if (category !== 'all') {
      filtered = filtered.filter(p => p.category === category);
    }

    const sort = sortSelect.value;
    if (sort === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sort === 'name') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    renderCatalog(filtered);
  }

  searchInput.addEventListener('input', updateCatalog);
  categorySelect.addEventListener('change', updateCatalog);
  sortSelect.addEventListener('change', updateCatalog);

  renderCatalog(products);
}