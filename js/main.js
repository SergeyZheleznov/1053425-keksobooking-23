import './popup.js';
import './form.js';
import './map.js';
import './fetch.js';
import { renderOffers } from './map.js';
import { getData } from './fetch.js';
import { filterOffers } from './filter.js';
import { cleanMap } from './map.js';
import { debounce } from './debounce.js';

const RERENDER_DELAY = 500;

const mapFilter = document.querySelector('.map__filters');

getData().then((response) => {

  const offers = filterOffers(response);
  renderOffers(offers);
  mapFilter.addEventListener('change', debounce (() => {
    cleanMap();
    renderOffers(filterOffers(response));
  }, RERENDER_DELAY));
});
