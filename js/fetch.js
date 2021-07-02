//const messageErrorRequest = document.querySelector('.module-error-server-request');
import {showAlert} from './util.js';
import  {mainPinMarker} from './map.js';
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

//Функция по отправке данных, которые пользователь,
//записал в форму, на сервер. Отправка по клику
//Обработчик на форме. Функция не экспорт.

//форма при правильном заполнении даёт вывод в консоль
//фразы Форма отправлена хорошо! Статус ОК
//Не знаю, как протестировать на неправильную отправку

const sendData = () => {
  const mainForm = document.querySelector('.ad-form');

  mainForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch(
      'https://23.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          showMessageSuccess();
        } else {
          showMessageError();
        }
      })
      .catch(() => {
        showAlert('2. Не удалось отправить форму. Попробуйте ещё раз');
      });
  });
};

sendData();
// функция отменяет действие кнопки отправки формы по умолчанию
// и отправляет запрос к серверу
// Запрос к серверу работает, можно тестировать
// sendData() undefined
/*
const sendFormButton = document.querySelector('.ad-form__submit');
sendFormButton.onclick = function (event) {
  event.preventDefault();
  console.log('click');
  sendData();
  console.log(sendData());
};
*/

//2.5. При успешной отправке формы или её очистке (нажатие
//на кнопку .ad-form__reset) страница, не перезагружаясь,
// переходит в состояние, когда:
//все заполненные поля возвращаются в изначальное состояние;
//фильтрация (состояние фильтров и отфильтрованные метки) сбрасывается;
//метка адреса возвращается в исходное положение;
//значение поля адреса корректируется соответственно исходному
//положению метки.

//Функция по пункту 2.5 ТЗ - возврат полей формы в первоначальное состояние
// и прочее.
// эту функцию не совсем понятно, как тестировать.
//

const mapFilters = document.querySelector('.map__filters');
const latLngAddress = document.querySelector('#address');
const resetFunction = () => {
  // очищаем форму
  const mainForm = document.querySelector('.ad-form');
  mainForm.reset;
  //Очищаем фильтры
  mapFilters.reset;
  //метка адреса в исходное состояние
  //Эта часть функции не работает

  mainPinMarker.setLatLng({
    lat: 35.66589,
    lng: 139.74303,
  });// ставим в поле адреса эти координаты метки
  const lat = 35.66589;
  const lng = 139.74303;
  latLngAddress.textContent = `x = ${lat} y = ${lng}`;
};

//Навешиваем обработчик нажания кнопки на кнопку очистки формы.
const resetFormButton = document.querySelector('.ad-form__reset');
resetFormButton.onclick = resetFunction();

resetFunction();

export{getData};
