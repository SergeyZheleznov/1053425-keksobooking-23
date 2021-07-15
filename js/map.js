import { createCustomPopup } from './popup.js';
import { makeFormАсtivated, aсtivateFilterForm, showAlert } from './form.js';
import { getData } from './fetch.js';
import { filterOffers } from './filter.js';
import { debounce } from './debounce.js';

const RERENDER_DELAY = 500;
const mapFilter = document.querySelector('.map__filters');
const resetButton = document.querySelector('.ad-form__reset');
const submitButton = document.querySelector('.ad-form__submit');
const mainPinIcon = L.icon({
  iconUrl: ['img/main-pin.svg'],
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.66589,
    lng: 139.74303,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const pins = L.layerGroup();

let map;

const renderOffers = (points) => {
  points
    .forEach((point) => {
      const { lat, lng } = point.location;

      const icon = L.icon({
        iconUrl: ['img/pin.svg'],
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

      const marker = L.marker(
        {
          lat,
          lng,
        },
        {
          icon,
        },
      );

      marker
        .addTo(pins)
        .bindPopup(
          createCustomPopup(point),
          {
            keepInView: true,
          },
        );
    });
  pins.addTo(map);
};

const cleanMap = () => {
  pins.clearLayers();
};

const setMap = () => {
  map = L.map('map-canvas')
    .on('load', () => {
      makeFormАсtivated();
      getData().then((response) => {
        const offers = filterOffers(response);
        aсtivateFilterForm();
        renderOffers(offers);
        mapFilter.addEventListener('change', debounce(() => {
          cleanMap();
          renderOffers(filterOffers(response));
        }, RERENDER_DELAY));
      })
        .catch(() => {
          showAlert('Ошибка загрузки, обновить страницу');
        });
    })
    .setView({
      lat: 35.66589,
      lng: 139.74303,
    }, 12);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  mainPinMarker.addTo(map);

  const addressInput = document.querySelector('#address');

  mainPinMarker.on('move', (evt) => {
    const addressLatLng = evt.target.getLatLng();
    const latitude = addressLatLng.lat;
    const lat = +latitude.toFixed(5);
    const longitude = addressLatLng.lng;
    const lng = +longitude.toFixed(5);

    addressInput.value = `${lat}, ${lng}`;
  });
};

const resetSubmitButton = () => {
  mainPinMarker.setLatLng({
    lat: 35.66589,
    lng: 139.74303,
  });

  map.setView({
    lat: 35.66589,
    lng: 139.74303,
  }, 12);
};

resetButton.addEventListener('click', resetSubmitButton);
submitButton.addEventListener('click', resetSubmitButton);

export { renderOffers, mainPinMarker, cleanMap, setMap };
