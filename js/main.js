import './popup.js';
import './form.js';
import './map.js';
import './fetch.js';
import { renderOffer } from './map.js';
import { getData } from './fetch.js';

const NUMBERS_OF_OFFERS = 3;

getData().then((response) => {
  renderOffer(response.slice(0, NUMBERS_OF_OFFERS));
});
