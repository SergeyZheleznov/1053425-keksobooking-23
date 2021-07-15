import { sendData } from './fetch.js';
import { mainPinMarker } from './map.js';

const LATITUDE_CENTER_TOKIO = 35.66589;
const LONGITUDE_CENTER_TOKIO = 139.74303;
const ALERT_SHOW_TIME = 5000;

const selectRooms = document.querySelector('#room_number');
const selectCapacity = document.querySelector('#capacity');

const onRoomsCapacityChange = () => {
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

selectRooms.addEventListener('change', onRoomsCapacityChange);

selectCapacity.addEventListener('change', onRoomsCapacityChange);

const addressFormInput = document.querySelector('#address');
addressFormInput.value = `${LATITUDE_CENTER_TOKIO}, ${LONGITUDE_CENTER_TOKIO}`;

const adForm = document.querySelector('.ad-form');

const deactivateForm = () => {
  document.querySelector('.ad-form').classList.add('ad-form--disabled');

  const adFormHeader = document.querySelector('.ad-form-header');
  adFormHeader.disabled = true;

  const adFormElements = document.querySelectorAll('.ad-form__element');
  adFormElements.forEach((elementLocal) => {
    elementLocal.disabled = true;
  });
};

const  deactivateFilterForm = () => {
  const formMapFilters = document.querySelector('.map__filters');
  formMapFilters.classList.add('map__filters--disabled');

  const mapFilter = document.querySelectorAll('.map__filter');
  mapFilter.forEach((elementLocal) => {
    elementLocal.disabled = true;
  });

  const mapFeatures = document.querySelector('.map__features');
  mapFeatures.disabled = true;
};

const makeFormАсtivated = () => {

  adForm.classList.remove('ad-form--disabled');

  const adFormHeader = document.querySelector('.ad-form-header');
  adFormHeader.disabled = false;

  const adFormElements = document.querySelectorAll('.ad-form__element');
  adFormElements.forEach((elementLocal) => {
    elementLocal.disabled = false;
  });
};

const aсtivateFilterForm = () => {
  const formMapFilters = document.querySelector('.map__filters');
  formMapFilters.classList.remove('map__filters--disabled');

  const mapFilter = document.querySelectorAll('.map__filter');
  mapFilter.forEach((elementLocal) => {
    elementLocal.disabled = false;
  });

  const mapFeatures = document.querySelector('.map__features');
  mapFeatures.disabled = false;
};

const typeHome = document.querySelector('#type');
const priceFormNight = document.querySelector('#price');

const onPriceChange = () => {
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

typeHome.addEventListener('change',onPriceChange);

const selectTimeIn = document.querySelector('#timein');
const selectTimeOut = document.querySelector('#timeout');

const onTimeInChange = () => {
  if (selectTimeIn.value === '12:00') {
    selectTimeOut.value = '12:00';
  } else if (selectTimeIn.value === '13:00') {
    selectTimeOut.value = '13:00';
  } else if (selectTimeIn.value === '14:00') {
    selectTimeOut.value = '14:00';
  }
};

selectTimeIn.addEventListener('change', onTimeInChange);

const onTimeOutChange = () => {
  if (selectTimeOut.value === '12:00') {
    selectTimeIn.value = '12:00';
  } else if (selectTimeOut.value === '13:00') {
    selectTimeIn.value = '13:00';
  } else if (selectTimeOut.value === '14:00') {
    selectTimeIn.value = '14:00';
  }
};

selectTimeOut.addEventListener('change',  onTimeOutChange);

const mapFilters = document.querySelector('.map__filters');
const latLngAddress = document.querySelector('#address');
const  onResetFormSubmit = () => {
  const mainForm = document.querySelector('.ad-form');
  mainForm.reset();
  mapFilters.reset();
  onPriceChange();
  mainPinMarker.setLatLng({
    lat: 35.66589,
    lng: 139.74303,
  });
  const lat = 35.66589;
  const lng = 139.74303;
  latLngAddress.textContent = `x = ${lat} y = ${lng}`;
};

const elementBody = document.querySelector('body');
const templateSuccess = document.querySelector('#success').content.querySelector('.success');
const successElement = templateSuccess.cloneNode(true);

function onElementBodyClick () {
  successElement.remove();
  elementBody.removeEventListener('click', onElementBodyClick);
  document.removeEventListener('keydown', onDocumentKeydown);
}

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    successElement.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
    elementBody.removeEventListener('click', onElementBodyClick);
  }
}

function showMessageSuccess() {
  elementBody.appendChild(successElement);

  elementBody.addEventListener('click', onElementBodyClick);
  document.addEventListener('keydown', onDocumentKeydown);
}


const templateError = document.querySelector('#error').content.querySelector('.error');
const errorElement = templateError.cloneNode(true);
const errorButton = errorElement.querySelector('.error__button');
function onDocumentErrorKeydown(evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    errorElement.remove();
    document.removeEventListener('keydown', onDocumentErrorKeydown);
    elementBody.removeEventListener('click', onElementBodyErrorClick);
    errorButton.removeEventListener('click', onErrorButtonClick);
  }
}

function onElementBodyErrorClick() {
  errorElement.remove();
  document.removeEventListener('keydown', onDocumentErrorKeydown);
  elementBody.removeEventListener('click', onElementBodyErrorClick);
  errorButton.removeEventListener('click', onErrorButtonClick);
}

function onErrorButtonClick() {
  errorElement.remove();
  document.removeEventListener('keydown', onDocumentErrorKeydown);
  elementBody.removeEventListener('click', onElementBodyErrorClick);
  errorButton.removeEventListener('click', onErrorButtonClick);
}

function showMessageError () {
  elementBody.appendChild(errorElement);

  document.addEventListener('keydown', onDocumentErrorKeydown);
  elementBody.addEventListener('click', onElementBodyErrorClick);
  errorButton.addEventListener('click', onErrorButtonClick);
}

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const resetFormButton = document.querySelector('.ad-form__reset');
resetFormButton.addEventListener('click', onResetFormSubmit);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(new FormData(adForm))
    .then((response) => {
      if (response.ok) {
        onResetFormSubmit();
        showMessageSuccess();
      } else {
        showMessageError();
      }
    })

    .catch(() => {
      showAlert();
    });
});

export { deactivateFilterForm, aсtivateFilterForm, makeFormАсtivated, deactivateForm, showAlert };
