const getData = () =>
  fetch(
    'https://23.javascript.pages.academy/keksobooking/data',
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((response) => response.json());

//функция по выводу сообщения об успехе отправки формы
//она же навешивает обработчик, чтобы это сообщение закрывалось
//при клике по любой части экрана
//Функция работает

const showMessageSuccess = () => {
  const elementBody = document.querySelector('body');
  const templateSuccess = document.querySelector('#success').content.querySelector('.success');
  const successElement = templateSuccess.cloneNode(true);
  elementBody.appendChild(successElement);
  elementBody.onclick = function () {
    successElement.classList.add('hidden');
  };
};

//функция по выводу сообщения об ошибке при запросе
//она же навешивает обработчик, чтобы это сообщение закрывалось
//при клике по любой части экрана
//Функция в целом работает, кроме клавиши Esc

const errorButton = document.querySelector('.error__button');

const showMessageError = () => {
  const elementBody = document.querySelector('body');
  const templateError = document.querySelector('#error').content.querySelector('.error');
  const errorElement = templateError.cloneNode(true);
  elementBody.appendChild(errorElement);
  elementBody.onclick = function () {
    errorElement.classList.add('hidden');
  };
  errorButton.onclick = function () {
    errorElement.classList.add('hidden');
  };
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      errorElement.classList.add('hidden');
    }
  });
};

const sendData = (data) =>

  fetch(
    'https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: data,
    },
  );

export { getData, sendData, showMessageSuccess, showMessageError };
