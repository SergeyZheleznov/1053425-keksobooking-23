import { sendData } from './fetch.js';
import { mainPinMarker } from './map.js';

const LATITUDE_CENTER_TOKIO = 35.66589;
const LONGITUDE_CENTER_TOKIO = 139.74303;
const ALERT_SHOW_TIME = 5000;

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

const addressFormInput = document.querySelector('#address');
addressFormInput.placeholder = `${LATITUDE_CENTER_TOKIO}, ${LONGITUDE_CENTER_TOKIO}`;

const adForm = document.querySelector('.ad-form');

/*
const adForm = document.querySelector('.ad-form');

const deactivateForm = () => {

  adForm.classList.add('ad-form--disabled');

  const adFormHeader = document.querySelector('.ad-form-header');
  adFormHeader.disabled = true;

  const adFormElements = document.querySelectorAll('.ad-form__element');
  adFormElements.forEach((elementLocal) => {
    elementLocal.disabled = true;
  });
/*
  const formMapFilters = document.querySelector('.map__filters');
  formMapFilters.classList.add('map__filters--disabled');

  const mapFilter = document.querySelectorAll('.map__filter');
  mapFilter.forEach((elementLocal) => {
    elementLocal.disabled = true;
  });

  const mapFeatures = document.querySelector('.map__features');
  mapFeatures.disabled = true;
  */
 /*
};
*/
const deactivateFilterForm = () => {
const formMapFilters = document.querySelector('.map__filters');
  formMapFilters.classList.add('map__filters--disabled');

  const mapFilter = document.querySelectorAll('.map__filter');
  mapFilter.forEach((elementLocal) => {
    elementLocal.disabled = true;
  });

  const mapFeatures = document.querySelector('.map__features');
  mapFeatures.disabled = true;
};
/*
//deactivateForm();
/*
const makeFormАсtivated = () => {

  adForm.classList.remove('ad-form--disabled');

  const adFormHeader = document.querySelector('.ad-form-header');
  adFormHeader.disabled = false;

  const adFormElements = document.querySelectorAll('.ad-form__element');
  adFormElements.forEach((elementLocal) => {
    elementLocal.disabled = false;
  });
/*
  const formMapFilters = document.querySelector('.map__filters');
  formMapFilters.classList.remove('map__filters--disabled');

  const mapFilter = document.querySelectorAll('.map__filter');
  mapFilter.forEach((elementLocal) => {
    elementLocal.disabled = false;
  });

  const mapFeatures = document.querySelector('.map__features');
  mapFeatures.disabled = false;
  */
 /*
};
*/

const aсtivateFilterForm  = () => {
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

const mapFilters = document.querySelector('.map__filters');
const latLngAddress = document.querySelector('#address');
const resetForm = () => {
  const mainForm = document.querySelector('.ad-form');
  mainForm.reset();
  mapFilters.reset();
  mainPinMarker.setLatLng({
    lat: 35.66589,
    lng: 139.74303,
  });
  const lat = 35.66589;
  const lng = 139.74303;
  latLngAddress.textContent = `x = ${lat} y = ${lng}`;
};

const showMessageSuccess = () => {
  const elementBody = document.querySelector('body');
  const templateSuccess = document.querySelector('#success').content.querySelector('.success');
  const successElement = templateSuccess.cloneNode(true);
  elementBody.appendChild(successElement);
  elementBody.onclick = function () {
    successElement.classList.add('hidden');
  };
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      successElement.classList.add('hidden');
    }
  });
};

const showMessageError = () => {
  const errorButton = document.querySelector('.error__button');
  const elementBody = document.querySelector('body');
  const templateError = document.querySelector('#error').content.querySelector('.error');
  const errorElement = templateError.cloneNode(true);
  elementBody.appendChild(errorElement);
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      errorElement.classList.add('hidden');
    }
  });
  elementBody.onclick = function () {
    errorElement.classList.add('hidden');
  };
  errorButton.onclick = function () {
    errorElement.classList.add('hidden');
  };

};

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
resetFormButton.addEventListener('click', resetForm);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(new FormData(adForm))
    .then((response) => {
      if (response.ok) {
        resetForm();
        showMessageSuccess();
      } else {
        showMessageError();
      }
    })

    .catch(() => {
      showAlert();
    });
});

export {deactivateFilterForm, aсtivateFilterForm};
