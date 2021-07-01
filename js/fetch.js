//const NUMBERS_OF_OFFERS = 4;
//console.log(mainForm);
//const messageErrorRequest = document.querySelector('.module-error-server-request');
/*
const getData = () => {
  fetch(
    'https://23.javascript.pages.academy/keksobooking/data',
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((response) => response.json())
    .then((data) => {
      console.log('Результат', data);
      console.log('Предложения', data.slice(0, NUMBERS_OF_OFFERS));
    });
};

getData();
*/
/*

//Данная функция не работает.
const postData = () => {
  fetch(
    'https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      //type: 'multipart/form-data',
      credentials: 'same-origin',
      body: new FormData(mainForm),
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
        //    showMessageSuccess();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    });
};

postData();
*/


//функция по выводу сообщения об ошибке запроса к серверу.
//Функция работает
/*
const messageErrorRequest = document.querySelector('.module-error-server-request');
const showMessage = () => {
  messageErrorRequest.classList.remove('visually-hidden');
};

showMessage();
*/

//функция по выводу сообщения об успехе отправки формы
//она же навешивает обработчик, чтобы это сообщение закрывалось
//при клике по любой части экрана
//Функция работает
/*
const showMessageSuccess = () => {
  const elementBody = document.querySelector('body');
  const templateSuccess = document.querySelector('#success').content.querySelector('.success');
  const successElement = templateSuccess.cloneNode(true);
  elementBody.appendChild(successElement);
  elementBody.onclick = function () {
    successElement.classList.add('hidden');
  };
};
showMessageSuccess();
*/

//функция по выводу сообщения об ошибке при запросе
//она же навешивает обработчик, чтобы это сообщение закрывалось
//при клике по любой части экрана
//Функция в целом работает, кроме клавиши Esc
/*
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

showMessageError();
*/

// функция отменяет действие кнопки отправки формы по умолчанию
// и отправляет запрос к серверу
//  Не могу протестировать, поскольку запрос к серверу не работает
/*
const sendFormButton = document.querySelector('.ad-form__submit');
sendFormButton.onclick = function (event) {
  event.preventDefault();
  postData();
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
const mainForm = document.querySelector('.ad-form');
const resetFormButton = document.querySelector('.ad-form__reset');
const mapFilters = document.querySelector('.map__filters');
const latLngAddress = document.querySelector('#address');
const resetFunction = () => {
  // очищаем форму
  mainForm.reset;
  //Очищаем фильтры
  mapFilters.reset;
  //метка адреса в исходное состояние
  //Эта часть функции не работает
  /*
  mainPinMarker.setLatLng({
    lat: 35.66589,
    lng: 139.74303,
  });
  */
  // ставим в поле адреса эти координаты метки
  const lat = 35.66589;
  const lng = 139.74303;
  latLngAddress.textContent = `x = ${lat} y = ${lng}`;
};

//Навешиваем обработчик нажания кнопки на кнопку очистки формы.
resetFormButton.onclick = resetFunction();

resetFunction();
