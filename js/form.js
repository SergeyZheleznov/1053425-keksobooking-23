import { sendData, showMessageSuccess, showMessageError } from './fetch.js';
import { showAlert } from './util.js';
import { mainPinMarker } from './map.js';

const LATITUDE_CENTER_TOKIO = 35.66589;
const LONGITUDE_CENTER_TOKIO = 139.74303;

// Задача

// Поле «Количество комнат» синхронизировано с полем «Количество мест»
// таким образом, что при выборе количества комнат вводятся ограничения
// на допустимые варианты выбора количества гостей:

// 1 комната — «для 1 гостя»;
// 2 комнаты — «для 2 гостей» или «для 1 гостя»;
// 3 комнаты — «для 3 гостей», «для 2 гостей» или «для 1 гостя»;
// 100 комнат — «не для гостей».

// Обратите внимание: допускаются разные способы ограничения допустимых значений
// поля «Количество мест»: удаление из разметки соответствующих элементов option,
// добавление элементам option состояния disabled или другие способы ограничения,
// например, с помощью метода setCustomValidity.

// нужно вызывать метод setCustomValidity у нужного элемента с нужным текстом,
// что бы при отправке неправильно заполненной формы сообщение об ошибке выскакивало

const selectRooms = document.querySelector('#room_number');
const selectCapacity = document.querySelector('#capacity');

const listenerRoomsCapacity = () => {
  if (selectRooms.value === '1' && selectCapacity.value !== '1') {
    selectCapacity.setCustomValidity('Одна комната только для одного гостя');
  } else if (selectRooms.value === '2' && selectCapacity.value !== '1' && selectCapacity.value !== '2') {
    selectCapacity.setCustomValidity('Две комнаты только для одного гостя или для двух гостей');
  } else if (selectRooms.value === '3' && selectCapacity.value !== '1' && selectCapacity.value !== '2' && selectCapacity.value !== '3') {
    selectCapacity.setCustomValidity('Две комнаты только для одного гостя, для двух гостей или трёх гостей');
  } else if (selectRooms.value === '100' && selectCapacity.value !== '0') {
    selectCapacity.setCustomValidity('не для гостей');
  } else {
    selectCapacity.setCustomValidity('');
  }

  selectCapacity.reportValidity();
};

selectRooms.addEventListener('change', listenerRoomsCapacity);

selectCapacity.addEventListener('change', listenerRoomsCapacity);


//Заполняем поле адреса карты на форме.
//В домашке сказано, что Поле адреса должно быть заполнено всегда,
//в том числе сразу после активации страницы.
//По умолчанию используются координаты центра Токио. Конец цитаты
//Мне кажется, что по умолчанию это значение поля placeholder
//Поэтому кладу в placeholder значения координат центра Токио.

const addressFormInput = document.querySelector('#address');

addressFormInput.placeholder = `${LATITUDE_CENTER_TOKIO}, ${LONGITUDE_CENTER_TOKIO}`;


//Эта часть файла занимается деактивацией и активацей формы.
const adForm = document.querySelector('.ad-form');

const deactivateForm = () => {

  adForm.classList.add('ad-form--disabled');

  const adFormHeader = document.querySelector('.ad-form-header');
  adFormHeader.disabled = true;

  const adFormElements = document.querySelectorAll('.ad-form__element');
  adFormElements.forEach((elementLocal) => {
    elementLocal.disabled = true;
  });

  const formMapFilters = document.querySelector('.map__filters');
  formMapFilters.classList.add('map__filters--disabled');

  const mapFilter = document.querySelectorAll('.map__filter');
  mapFilter.forEach((elementLocal) => {
    elementLocal.disabled = true;
  });

  const mapFeatures = document.querySelector('.map__features');
  mapFeatures.disabled = true;
};

deactivateForm();

const makeFormАсtivated = () => {

  adForm.classList.remove('ad-form--disabled');

  const adFormHeader = document.querySelector('.ad-form-header');
  adFormHeader.disabled = false;

  const adFormElements = document.querySelectorAll('.ad-form__element');
  adFormElements.forEach((elementLocal) => {
    elementLocal.disabled = false;
  });

  const formMapFilters = document.querySelector('.map__filters');
  formMapFilters.classList.remove('map__filters--disabled');

  const mapFilter = document.querySelectorAll('.map__filter');
  mapFilter.forEach((elementLocal) => {
    elementLocal.disabled = false;
  });

  const mapFeatures = document.querySelector('.map__features');
  mapFeatures.disabled = false;
};

makeFormАсtivated();

//эта часть файла устанавливает минимальную цена на жильё

const typeHome = document.querySelector('#type');
const priceFormNight = document.querySelector('#price');

const listenPrice = () => {
  switch (typeHome.value) {
    case 'bungalow':
      priceFormNight.placeholder = 0;
      priceFormNight.min = 0;
      break;
    case 'flat':
      priceFormNight.placeholder = 1000;
      priceFormNight.min = 1000;
      break;
    case 'hotel':
      priceFormNight.placeholder = 3000;
      priceFormNight.min = 3000;
      break;
    case 'house':
      priceFormNight.placeholder = 5000;
      priceFormNight.min = 5000;
      break;
    case 'palace':
      priceFormNight.placeholder = 10000;
      priceFormNight.min = 10000;
      break;
  }
};

typeHome.addEventListener('change', listenPrice);
listenPrice();

//эта часть файла определяет связь времени заезда и времени выезда

const selectTimeIn = document.querySelector('#timein');
const selectTimeOut = document.querySelector('#timeout');

const listenTimeIn = () => {
  if (selectTimeIn.value === '12:00') {
    selectTimeOut.value = '12:00';
  } else if (selectTimeIn.value === '13:00') {
    selectTimeOut.value = '13:00';
  } else if (selectTimeIn.value === '14:00') {
    selectTimeOut.value = '14:00';
  }
};

selectTimeIn.addEventListener('change', listenTimeIn);

const listenTimeOut = () => {
  if (selectTimeOut.value === '12:00') {
    selectTimeIn.value = '12:00';
  } else if (selectTimeOut.value === '13:00') {
    selectTimeIn.value = '13:00';
  } else if (selectTimeOut.value === '14:00') {
    selectTimeIn.value = '14:00';
  }
};

selectTimeOut.addEventListener('change', listenTimeOut);

//Функция по пункту 2.5 ТЗ - возврат полей формы в первоначальное состояние
// и прочее.
// эту функцию не совсем понятно, как тестировать.
//

const mapFilters = document.querySelector('.map__filters');
const latLngAddress = document.querySelector('#address');
const resetForm = () => {
  // очищаем форму
  const mainForm = document.querySelector('.ad-form');
  mainForm.reset();
  //Очищаем фильтры
  mapFilters.reset();
  //метка адреса в исходное состояние
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
resetFormButton.addEventListener ('click', resetForm);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(new FormData(adForm))
    .then((response) => {
      if (response.ok) {
        showMessageSuccess();
      } else {
        showMessageError();
      }
      resetForm();
    })
    .catch(() => {
      showAlert('2. Не удалось отправить форму. Попробуйте ещё раз');
    });
});
