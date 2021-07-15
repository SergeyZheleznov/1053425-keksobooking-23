const createCustomPopup = (point) => {
  const templateTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = templateTemplate.cloneNode(true);

  if (!point.offer.title) {
    popupElement.querySelector('.popup__title').classList.add('hidden');
  }
  popupElement.querySelector('.popup__title').textContent = point.offer.title;

  if (!point.offer.address) {
    popupElement.querySelector('.popup__address').classList.add('hidden');
  }
  popupElement.querySelector('.popup__text--address').textContent = point.offer.address;

  if (!point.offer.price) {
    popupElement.querySelector('.popup__price').classList.add('hidden');
  }
  popupElement.querySelector('.popup__text--price').textContent = `${point.offer.price} ₽/ночь`;

  const housingTypes = {
    'bungalo': 'Бунгало',
    'flat': 'Квартира',
    'hotel': 'Отель',
    'house': 'Дом',
    'palase': 'Дворец',
  };

  if (!point.offer.type) {
    popupElement.querySelector('.popup__type').classList.add('hidden');
  }

  popupElement.querySelector('.popup__type').textContent = housingTypes[point.offer.type];

  if (!point.offer.rooms) {
    popupElement.querySelector('.popup__text--capacity').classList.add('hidden');
  }

  if (!point.offer.guests) {
    popupElement.querySelector('.popup__text--capacity').classList.add('hidden');
  }
  popupElement.querySelector('.popup__text--capacity').textContent = `${point.offer.rooms} комнаты для ${point.offer.guests} гостей`;

  if (!point.offer.checkin) {
    popupElement.querySelector('.popup__text--time').classList.add('hidden');
  }

  if (!point.offer.checkout) {
    popupElement.querySelector('.popup__text--time').classList.add('hidden');
  }
  popupElement.querySelector('.popup__text--time').textContent = `Заезд до ${point.offer.checkin} выезд после ${point.offer.checkout}`;

  if (!point.offer.features) {
    popupElement.querySelector('.popup__features').classList.add('hidden');
  }

  const list = popupElement.querySelector('.popup__features');
  const featureNew = popupElement.querySelector('.popup__feature');
  list.innerHTML = '';

  if (point.offer.features) {
    for (let index = 0; index < point.offer.features.length; index++) {
      const dupNode = featureNew.cloneNode(true);
      const featureNewIndex = point.offer.features[index];
      dupNode.className = `popup__feature popup__feature--${featureNewIndex}`;
      list.appendChild(dupNode);
    }
  }

  if (!point.offer.description) {
    popupElement.querySelector('.popup__description').classList.add('hidden');
  }
  popupElement.querySelector('.popup__description').textContent = point.offer.description;

  const listPhotos = popupElement.querySelector('.popup__photos');
  const photoNew = popupElement.querySelector('.popup__photo');
  listPhotos.innerHTML = '';

  if (point.offer.photos) {
    for (let index = 0; index < point.offer.photos.length; index++) {
      const dupNodePhotos = photoNew.cloneNode(true);
      const photoNewIndex = point.offer.photos[index];
      dupNodePhotos.src = `${photoNewIndex}`;
      listPhotos.appendChild(dupNodePhotos);
    }
  } else {
    popupElement.querySelector('.popup__photos').classList.add('hidden');
  }
  if (point.author.avatar) {
    popupElement.querySelector('.popup__avatar').src = point.author.avatar;
  } else {
    popupElement.querySelector('.popup__avatar').classList.add('hidden');
  }
  return popupElement;
};

export { createCustomPopup };
