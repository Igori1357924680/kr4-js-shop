// Получаем корзину из localStorage или создаем пустую
let cart = JSON.parse(localStorage.getItem('playtable_cart')) || [];

// Функция сохранения корзины
function saveCart() {
  localStorage.setItem('playtable_cart', JSON.stringify(cart));
  updateCartCount();
}

// Обновление счетчика в шапке
function updateCartCount() {
  const countElements = document.querySelectorAll('#cart-count');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  countElements.forEach(el => el.textContent = totalItems);
}

// Функция для показа всплывающего уведомления на странице (вместо alert)
function showNotification(message) {
  let notify = document.getElementById('cart-notification');
  if (!notify) {
    notify = document.createElement('div');
    notify.id = 'cart-notification';
    // Стили для уведомления
    notify.style.position = 'fixed';
    notify.style.bottom = '20px';
    notify.style.right = '20px';
    notify.style.backgroundColor = '#2e9d63';
    notify.style.color = '#fff';
    notify.style.padding = '15px 20px';
    notify.style.borderRadius = '8px';
    notify.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    notify.style.zIndex = '1000';
    notify.style.transition = 'opacity 0.3s';
    document.body.appendChild(notify);
  }
  
  notify.textContent = message;
  notify.style.opacity = '1';
  notify.style.display = 'block';

  // Скрываем через 3 секунды
  setTimeout(() => {
    notify.style.opacity = '0';
    setTimeout(() => { notify.style.display = 'none'; }, 300);
  }, 3000);
}

// Добавление товара в корзину
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const cartItem = cart.find(item => item.id === productId);
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  saveCart();
  // Используем безопасный вывод вместо alert
  showNotification(`Товар "${product.title}" добавлен в корзину!`);
}

// Удаление товара из корзины
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  renderCart();
}

// Отрисовка страницы корзины (если мы на cart.html)
function renderCart() {
  const container = document.getElementById('cart-container');
  const totalElement = document.getElementById('cart-total');
  if (!container) return;

  container.innerHTML = ''; 

  if (cart.length === 0) {
    container.innerHTML = '<p>Ваша корзина пуста. <a href="catalog.html">Перейти в каталог</a></p>';
    if (totalElement) totalElement.textContent = '0';
    return;
  }

  cart.forEach(item => {
    const article = document.createElement('article');
    article.classList.add('product-card');

    const title = document.createElement('h3');
    title.classList.add('product-card__title');
    title.textContent = item.title;

    const price = document.createElement('p');
    price.classList.add('product-card__price');
    price.textContent = new Intl.NumberFormat('ru-RU').format(item.price) + ' ₽';

    const quantity = document.createElement('p');
    quantity.textContent = `Количество: ${item.quantity}`;

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('button', 'button--ghost');
    removeBtn.textContent = 'Удалить';
    removeBtn.addEventListener('click', () => removeFromCart(item.id));

    article.append(title, price, quantity, removeBtn);
    container.append(article);
  });

  // Расчет суммы через reduce
  const totalSum = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  if (totalElement) {
    totalElement.textContent = new Intl.NumberFormat('ru-RU').format(totalSum);
  }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderCart();

  // Обработка кнопки "Оформить заказ" на странице cart.html
  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      const messageDiv = document.getElementById('checkout-message');
      
      if (cart.length === 0) {
        messageDiv.textContent = 'Корзина пуста. Добавьте товары!';
        messageDiv.style.color = 'red';
        messageDiv.style.display = 'block';
      } else {
        messageDiv.textContent = 'Заказ успешно оформлен! (Имитация)';
        messageDiv.style.color = 'green';
        messageDiv.style.display = 'block';
        
        cart = []; // Очищаем корзину
        saveCart();
        renderCart();
      }
    });
  }
});