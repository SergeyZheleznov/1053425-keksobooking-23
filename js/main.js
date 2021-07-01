import './popup.js';
import './form.js';
import './map.js';
import './fetch.js';
import { renderOffer } from './map.js';

import { createProposal } from './util.js';
const OFFERS = [];
for (let index = 0; index <= 9; index++) {
  OFFERS[index] = createProposal();
}

renderOffer ( OFFERS);
