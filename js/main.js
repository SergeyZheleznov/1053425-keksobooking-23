import './popup.js';
import './form.js';
import './map.js';
import './fetch.js';
import { getData } from './fetch.js';
import { filterOffers } from './filter.js';
import { cleanMap, renderOffers } from './map.js';
import { debounce } from './debounce.js';
import { deactivateFilterForm, aсtivateFilterForm } from './form.js';
/*
const deactivateForm = () => {
  const adForm = document.querySelector('.ad-form');
  adForm.classList.add('ad-form--disabled');

  const adFormHeader = document.querySelector('.ad-form-header');
  adFormHeader.disabled = true;

  const adFormElements = document.querySelectorAll('.ad-form__element');
  adFormElements.forEach((elementLocal) => {
    elementLocal.disabled = true;
  });

  const formMapFilters = document.querySelector('.map__filters');
  formMapFilters.classList.add('map__filters--disabled');

  const mapFilters = document.querySelectorAll('.map__filter');
  mapFilters.forEach((elementLocal) => {
    elementLocal.disabled = true;
  });

  const mapFeatures = document.querySelector('.map__features');
  mapFeatures.disabled = true;
};

deactivateForm();
*/
const RERENDER_DELAY = 500;

const mapFilter = document.querySelector('.map__filters');
deactivateFilterForm();
getData().then((response) => {
  const offers = filterOffers(response);
  aсtivateFilterForm();
  renderOffers(offers);
  mapFilter.addEventListener('change', debounce (() => {
    cleanMap();
    renderOffers(filterOffers(response));
  }, RERENDER_DELAY));
});
