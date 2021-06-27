import {createProposal} from './util.js';

//в скобках в строке 97 была point, не пригодилась
const createCustomPopup = () => {
  const templateTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = templateTemplate.cloneNode(true);
  const createInvite = createProposal();
  //Выполняю первую подзадачу задания № 2
  if (createInvite.offer.title === undefined) {
    document.querySelector('.popup__title').classList.add ('hidden');
  }
  popupElement.querySelector('.popup__title').textContent = createInvite.offer.title;

  //Выполняю вторую подзадачу задания № 2
  if (createInvite.offer.address === undefined) {
    document.querySelector('.popup__address').classList.add ('hidden');
  }
  popupElement.querySelector('.popup__text--address').textContent = createInvite.offer.address;

  //Выполняю третью подзадачу задания № 2
  if (createInvite.offer.price === undefined) {
    document.querySelector('.popup__price').classList.add ('hidden');
  }
  popupElement.querySelector('.popup__text--price').textContent = `${createInvite.offer.price} ₽/ночь`;

  //Выполняю четвёртую подзадачу задачи № 2
  switch (createInvite.offer.type) {
    case 'bungalow':
      createInvite.offer.type = 'Бунгало';
      break;
    case 'house':
      createInvite.offer.type = 'Дом';
      break;
    case 'palace':
      createInvite.offer.type = 'Дворец';
      break;
    case 'flat':
      createInvite.offer.type = 'Квартира';
      break;
    case 'hotel':
      createInvite.offer.type = 'Отель';
      break;
  }

  if (createInvite.offer.type === undefined) {
    document.querySelector('.popup__type').classList.add('hidden');
  }

  popupElement.querySelector('.popup__type').textContent = createInvite.offer.type;

  // Выполняю пятую подзадачу задания № 2
  if (createInvite.offer.rooms === undefined) {
    document.querySelector('.popup__text--capacity').classList.add ('hidden');
  }

  if (createInvite.offer.guests === undefined) {
    document.querySelector('.popup__text--capacity').classList.add ('hidden');
  }
  popupElement.querySelector('.popup__text--capacity').textContent = `${createInvite.offer.rooms} комнаты для ${createInvite.offer.guests} гостей`;

  //Шестая подзадача задания № 2
  if (createInvite.offer.checkin === undefined) {
    document.querySelector('.popup__text--time').classList.add ('hidden');
  }

  if (createInvite.offer.checkout === undefined) {
    document.querySelector('.popup__text--time').classList.add ('hidden');
  }
  popupElement.querySelector('.popup__text--time').textContent = `Заезд до ${createInvite.offer.checkin} выезд после ${createInvite.offer.checkout}`;

  //Седьмая подзадача задания № 2
  const list = popupElement.querySelector('.popup__features');
  const featureNew = popupElement.querySelector('.popup__feature');
  list.innerHTML = '';

  for (let index = 0; index < createInvite.offer.features.length; index++) {
    const dupNode = featureNew.cloneNode(true);
    const featureNewIndex = createInvite.offer.features[index];
    dupNode.className = `popup__feature popup__feature--${featureNewIndex}`;
    list.appendChild(dupNode);
  }

  //Восьмая подзадача задания № 2
  if (createInvite.offer.description === undefined) {
    document.querySelector('.popup__description').classList.add ('hidden');
  }
  popupElement.querySelector('.popup__description').textContent = createInvite.offer.description;

  //Девятая подзадача задания № 2
  const listPhotos = popupElement.querySelector('.popup__photos');
  const photoNew = popupElement.querySelector('.popup__photo');
  listPhotos.innerHTML = '';

  for (let index = 0; index < createInvite.offer.photos.length; index++) {
    const dupNodePhotos = photoNew.cloneNode(true);
    const photoNewIndex = createInvite.offer.photos[index];
    dupNodePhotos.src = `${photoNewIndex}`;
    listPhotos.appendChild(dupNodePhotos);
  }

  //Десятая подзадача задания № 2
  popupElement.querySelector('.popup__avatar').src = createInvite.author.avatar;

  return popupElement;
};

export {createCustomPopup};
