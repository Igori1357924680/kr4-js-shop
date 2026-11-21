document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.order-form');
  if (!form) return; // Если мы не на странице заявки, выходим

  // Функция для вывода сообщения об ошибке под полем
  function showError(input, message) {
    // Ищем или создаем блок для ошибки
    let errorElement = input.nextElementSibling;
    if (!errorElement || !errorElement.classList.contains('error-message')) {
      errorElement = document.createElement('div');
      errorElement.classList.add('error-message');
      errorElement.style.color = 'red';
      errorElement.style.fontSize = '14px';
      errorElement.style.marginTop = '5px';
      input.after(errorElement); // Вставляем после поля ввода
    }
    errorElement.textContent = message;
    input.style.borderColor = 'red'; // Подсвечиваем поле
  }

  // Функция для очистки ошибки
  function clearError(input) {
    let errorElement = input.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error-message')) {
      errorElement.textContent = '';
    }
    input.style.borderColor = ''; // Возвращаем стандартный цвет
  }

  // Обработчик отправки формы
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Отменяем стандартную отправку страницы
    let isValid = true;

    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#phone');

    // Валидация Имени
    if (!nameInput.value.trim()) {
      showError(nameInput, 'Пожалуйста, введите имя');
      isValid = false;
    } else {
      clearError(nameInput);
    }

    // Валидация Email (простая проверка на @ и точку)
    const emailValue = emailInput.value.trim();
    if (!emailValue.includes('@') || !emailValue.includes('.')) {
      showError(emailInput, 'Введите корректный E-mail');
      isValid = false;
    } else {
      clearError(emailInput);
    }

    // Валидация Телефона (просто проверяем, что введено больше 5 символов)
    const phoneValue = phoneInput.value.trim();
    if (phoneValue.length < 5) {
      showError(phoneInput, 'Введите корректный номер телефона');
      isValid = false;
    } else {
      clearError(phoneInput);
    }

    // Если всё верно, показываем сообщение об успехе
    if (isValid) {
      // Удаляем старые сообщения об успехе, если они были
      const oldSuccess = form.querySelector('.success-message');
      if (oldSuccess) oldSuccess.remove();

      // Создаем блок успеха
      const successMessage = document.createElement('div');
      successMessage.classList.add('success-message');
      successMessage.style.backgroundColor = '#d4edda';
      successMessage.style.color = '#155724';
      successMessage.style.padding = '15px';
      successMessage.style.borderRadius = '5px';
      successMessage.style.marginBottom = '20px';
      successMessage.textContent = 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.';
      
      // Вставляем его перед формой
      form.before(successMessage);
      
      // Очищаем форму
      form.reset();
    }
  });
});