const createCustomPopup = (point) => {
  const templateTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = templateTemplate.cloneNode(true);
  //Выполняю первую подзадачу задания № 2
  if (point.offer.title === undefined) {
    document.querySelector('.popup__title').classList.add ('hidden');
  }
  popupElement.querySelector('.popup__title').textContent = point.offer.title;

  //Выполняю вторую подзадачу задания № 2
  if (point.offer.address === undefined) {
    document.querySelector('.popup__address').classList.add ('hidden');
  }
  popupElement.querySelector('.popup__text--address').textContent = point.offer.address;

  //Выполняю третью подзадачу задания № 2
  if (point.offer.price === undefined) {
    document.querySelector('.popup__price').classList.add ('hidden');
  }
  popupElement.querySelector('.popup__text--price').textContent = `${point.offer.price} ₽/ночь`;

  //Выполняю четвёртую подзадачу задачи № 2
  switch (point.offer.type) {
    case 'bungalow':
      point.offer.type = 'Бунгало';
      break;
    case 'house':
      point.offer.type = 'Дом';
      break;
    case 'palace':
      point.offer.type = 'Дворец';
      break;
    case 'flat':
      point.offer.type = 'Квартира';
      break;
    case 'hotel':
      point.offer.type = 'Отель';
      break;
  }

  if (point.offer.type === undefined) {
    document.querySelector('.popup__type').classList.add('hidden');
  }

  popupElement.querySelector('.popup__type').textContent = point.offer.type;

  // Выполняю пятую подзадачу задания № 2
  if (point.offer.rooms === undefined) {
    document.querySelector('.popup__text--capacity').classList.add ('hidden');
  }

  if (point.offer.guests === undefined) {
    document.querySelector('.popup__text--capacity').classList.add ('hidden');
  }
  popupElement.querySelector('.popup__text--capacity').textContent = `${point.offer.rooms} комнаты для ${point.offer.guests} гостей`;

  //Шестая подзадача задания № 2
  if (point.offer.checkin === undefined) {
    document.querySelector('.popup__text--time').classList.add ('hidden');
  }

  if (point.offer.checkout === undefined) {
    document.querySelector('.popup__text--time').classList.add ('hidden');
  }
  popupElement.querySelector('.popup__text--time').textContent = `Заезд до ${point.offer.checkin} выезд после ${point.offer.checkout}`;

  //Седьмая подзадача задания № 2
  const list = popupElement.querySelector('.popup__features');
  const featureNew = popupElement.querySelector('.popup__feature');
  list.innerHTML = '';

  for (let index = 0; index < point.offer.features.length; index++) {
    const dupNode = featureNew.cloneNode(true);
    const featureNewIndex = point.offer.features[index];
    dupNode.className = `popup__feature popup__feature--${featureNewIndex}`;
    list.appendChild(dupNode);
  }

  //Восьмая подзадача задания № 2
  if (point.offer.description === undefined) {
    document.querySelector('.popup__description').classList.add ('hidden');
  }
  popupElement.querySelector('.popup__description').textContent = point.offer.description;

  //Девятая подзадача задания № 2
  const listPhotos = popupElement.querySelector('.popup__photos');
  const photoNew = popupElement.querySelector('.popup__photo');
  listPhotos.innerHTML = '';

  for (let index = 0; index < point.offer.photos.length; index++) {
    const dupNodePhotos = photoNew.cloneNode(true);
    const photoNewIndex = point.offer.photos[index];
    dupNodePhotos.src = `${photoNewIndex}`;
    listPhotos.appendChild(dupNodePhotos);
  }

  //Десятая подзадача задания № 2
  popupElement.querySelector('.popup__avatar').src = point.author.avatar;

  return popupElement;
};

export {createCustomPopup};
