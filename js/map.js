import { OFFER } from './util.js';
const resetButton = document.querySelector('.ad-form__reset');
const submitButton = document.querySelector('.ad-form__submit');

const map = L.map('map-canvas')
  .on('load', () => {
    //console.log('Карта инициализирована');
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

const mainPinIcon = L.icon({
  iconUrl: ['../img/main-pin.svg'],
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

mainPinMarker.addTo(map);

//Начал делать так, чтобы координаты главной точки передвижения были доступны
//и выдавались с 5 знаками после запятой, как по заданию.
//Не разобрался, как получить доступ снаружи.
//чтобы вывести в консоль координаты главной точки после передвижания
// нужно внутри написать console.log(addressLatLng)

mainPinMarker.on('moveend', (evt) => {
  const addressLatLng = evt.target.getLatLng();
  const latitude = addressLatLng.lat;
  const lat = +latitude.toFixed(5);
  const longitude = addressLatLng.lng;
  const lng = +longitude.toFixed(5);

  return (lat,lng);
});

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

//mainPinMarker.remove();

const points = [
  {
    title: 'islandMiddle',
    lat: 35.65032,
    lng: 139.775447,
  },
  {
    titlе: 'park',
    lat: 35.65213,
    lng: 139.72635,
  },
  {
    titlе: 'flat',
    lat: 35.64488,
    lng: 139.73596,
  },
  {
    title: 'house',
    lat: 35.66775,
    lng: 139.79673,
  },
];

//в скобках в строке 97 была point, не пригодилась
const createCustomPopup = () => {
  const templateTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = templateTemplate.cloneNode(true);

  //Выполняю первую подзадачу задания № 2
  if (OFFER.offer.title === undefined) {
    document.querySelector('.popup__title').classList.add ('hidden');
  }
  popupElement.querySelector('.popup__title').textContent = OFFER.offer.title;

  //Выполняю вторую подзадачу задания № 2
  if (OFFER.offer.address === undefined) {
    document.querySelector('.popup__address').classList.add ('hidden');
  }
  popupElement.querySelector('.popup__text--address').textContent = OFFER.offer.address;

  //Выполняю третью подзадачу задания № 2
  if (OFFER.offer.price === undefined) {
    document.querySelector('.popup__price').classList.add ('hidden');
  }
  popupElement.querySelector('.popup__text--price').textContent = `${OFFER.offer.price} ₽/ночь`;

  //Выполняю четвёртую подзадачу задачи № 2
  switch (OFFER.offer.type) {
    case 'bungalow':
      OFFER.offer.type = 'Бунгало';
      break;
    case 'house':
      OFFER.offer.type = 'Дом';
      break;
    case 'palace':
      OFFER.offer.type = 'Дворец';
      break;
    case 'flat':
      OFFER.offer.type = 'Квартира';
      break;
    case 'hotel':
      OFFER.offer.type = 'Отель';
      break;
  }


  if (OFFER.offer.type === undefined) {
    document.querySelector('.popup__type').classList.add('hidden');
  }

  popupElement.querySelector('.popup__type').textContent = OFFER.offer.type;

  // Выполняю пятую подзадачу задания № 2
  if (OFFER.offer.rooms === undefined) {
    document.querySelector('.popup__text--capacity').classList.add ('hidden');
  }

  if (OFFER.offer.guests === undefined) {
    document.querySelector('.popup__text--capacity').classList.add ('hidden');
  }
  popupElement.querySelector('.popup__text--capacity').textContent = `${OFFER.offer.rooms} комнаты для ${OFFER.offer.guests} гостей`;

  //Шестая подзадача задания № 2
  if (OFFER.offer.checkin === undefined) {
    document.querySelector('.popup__text--time').classList.add ('hidden');
  }

  if (OFFER.offer.checkout === undefined) {
    document.querySelector('.popup__text--time').classList.add ('hidden');
  }
  popupElement.querySelector('.popup__text--time').textContent = `Заезд до ${OFFER.offer.checkin} выезд после ${OFFER.offer.checkout}`;

  //Седьмая подзадача задания № 2
  const list = popupElement.querySelector('.popup__features');
  const featureNew = popupElement.querySelector('.popup__feature');
  list.innerHTML = '';

  for (let index = 0; index < OFFER.offer.features.length; index++) {
    const dupNode = featureNew.cloneNode(true);
    const featureNewIndex = OFFER.offer.features[index];
    dupNode.className = `popup__feature popup__feature--${featureNewIndex}`;
    list.appendChild(dupNode);
  }

  //Восьмая подзадача задания № 2
  if (OFFER.offer.description === undefined) {
    document.querySelector('.popup__description').classList.add ('hidden');
  }
  popupElement.querySelector('.popup__description').textContent = OFFER.offer.description;

  //Девятая подзадача задания № 2
  const listPhotos = popupElement.querySelector('.popup__photos');
  const photoNew = popupElement.querySelector('.popup__photo');
  listPhotos.innerHTML = '';

  for (let index = 0; index < OFFER.offer.photos.length; index++) {
    const dupNodePhotos = photoNew.cloneNode(true);
    const photoNewIndex = OFFER.offer.photos[index];
    dupNodePhotos.src = `${photoNewIndex}`;
    listPhotos.appendChild(dupNodePhotos);
  }

  //Десятая подзадача задания № 2
  popupElement.querySelector('.popup__avatar').src = OFFER.author.avatar;

  return popupElement;
};

points.forEach((point) => {
  const { lat, lng } = point;

  const icon = L.icon({
    iconUrl: ['../img/pin.svg'],
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
    .addTo(map)
    .bindPopup(
      createCustomPopup(point),
      {
        keepInView: true,
      },
    );
});
