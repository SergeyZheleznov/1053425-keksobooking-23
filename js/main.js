import './popup.js';
import { getData } from './fetch.js';
import { filterOffers } from './filter.js';
import { cleanMap, renderOffers, setMap } from './map.js';
import { debounce } from './debounce.js';
import { deactivateFilterForm, aсtivateFilterForm, deactivateForm } from './form.js';

const RERENDER_DELAY = 500;
const mapFilter = document.querySelector('.map__filters');

deactivateForm();
deactivateFilterForm();

setMap();
getData().then((response) => {
  const offers = filterOffers(response);
  aсtivateFilterForm();
  renderOffers(offers);
  mapFilter.addEventListener('change', debounce(() => {
    cleanMap();
    renderOffers(filterOffers(response));
  }, RERENDER_DELAY));
});

