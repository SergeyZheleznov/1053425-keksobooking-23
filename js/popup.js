/*import {OFFER} from './util.js';

//Достаю из шаблона его содержимое
const templateFragment = document.querySelector('#card').content;

//клонирую всё содержимое шаблона.
const element = templateFragment.cloneNode(true);

//далее по заданию заполнить шаблон своими данными

//Выполняю первую подзадачу задания № 2
//element Это единственнный разумно доступный дом элемент у меня сейчас

if (OFFER.offer.title === undefined) {
  document.querySelector('.popup__title').classList.add ('hidden');
}

element.querySelector('.popup__title').textContent = OFFER.offer.title;

//Выполняю вторую подзадачу задания № 2

if (OFFER.offer.address === undefined) {
  document.querySelector('.popup__address').classList.add ('hidden');
}

element.querySelector('.popup__text--address').textContent = OFFER.offer.address;

//Выполняю третью подзадачу задания № 2
//Выведите цену offer.price в блок .popup__text--price строкой вида
//{{offer.price}} ₽/ночь. Например, «5200 ₽/ночь».

if (OFFER.offer.price === undefined) {
  document.querySelector('.popup__price').classList.add ('hidden');
}

element.querySelector('.popup__text--price').textContent = `${OFFER.offer.price} ₽/ночь`;

//Выполняю четвёртую подзадачу задачи № 2
////В блок .popup__type выведите тип жилья offer.type, сопоставив с подписями:
// Квартира для flat
// Бунгало для bungalow
// Дом для house
// Дворец для palace
// Отель для hotel

// Занимаемся переводом тивов жилья с английского на русский язык

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
  document.querySelector('.popup__type').classList.add ('hidden');
}

element.querySelector('.popup__type').textContent = OFFER.offer.type;

//четвёртая подзадача задания № 2 решена

// Выполняю пятую подзадачу задания № 2
//Выведите количество гостей и комнат offer.rooms и offer.guests в блок .popup__text--capacity
//строкой вида {{offer.rooms}} комнаты для {{offer.guests}} гостей.
//Например, «2 комнаты для 3 гостей».

if (OFFER.offer.rooms === undefined) {
  document.querySelector('.popup__text--capacity').classList.add ('hidden');
}

if (OFFER.offer.guests === undefined) {
  document.querySelector('.popup__text--capacity').classList.add ('hidden');
}

element.querySelector('.popup__text--capacity').textContent = `${OFFER.offer.rooms} комнаты для ${OFFER.offer.guests} гостей`;
// Пятая подзадача задания № 2 успешно решена

//Шестая подзадача задания № 2
// Время заезда и выезда offer.checkin и offer.checkout в блок
// .popup__text--time строкой вида Заезд после {{offer.checkin}},
// выезд до {{offer.checkout}}. Например, «Заезд после 14:00, выезд до 14:00»

if (OFFER.offer.checkin === undefined) {
  document.querySelector('.popup__text--time').classList.add ('hidden');
}

if (OFFER.offer.checkout === undefined) {
  document.querySelector('.popup__text--time').classList.add ('hidden');
}

element.querySelector('.popup__text--time').textContent = `Заезд до ${OFFER.offer.checkin} выезд после ${OFFER.offer.checkout}`;

//Седьмая подзадача задания № 2
//В список .popup__features выведите все доступные удобства в объявлении.

//Нашёл элемент, содержащий список и поместил его в переменную list

const list = element.querySelector('.popup__features');

//сохраняю в переменную ссылку на первую фичу, которая в шаблоне

const featureNew = element.querySelector('.popup__feature');

//Очищаю список

list.innerHTML = '';

for (let index = 0; index < OFFER.offer.features.length; index++) {
  const dupNode = featureNew.cloneNode(true);
  const featureNewIndex = OFFER.offer.features[index];
  dupNode.className = `popup__feature popup__feature--${featureNewIndex}`;
  list.appendChild(dupNode);
}

//Седьмая задача задания № 2 успешно решена, выводит правильный список.

//Восьмая подзадача задания № 2
//В блок .popup__description
//выведите описание объекта недвижимости offer.description.

if (OFFER.offer.description === undefined) {
  document.querySelector('.popup__description').classList.add ('hidden');
}

element.querySelector('.popup__description').textContent = OFFER.offer.description;

//Девятая подзадача задания № 2
//В блок .popup__photos выведите все фотографии из списка offer.photos. Каждая из строк массива photos
//должна записываться как атрибут src соответствующего изображения.

//Нашёл элемент, содержащий список и поместил его в переменную listPhotos

const listPhotos = element.querySelector('.popup__photos');

//сохраняю в переменную ссылку на первую фотку, которая в шаблоне

const photoNew = element.querySelector('.popup__photo');
//Очищаю список

listPhotos.innerHTML = '';

for (let index = 0; index < OFFER.offer.photos.length; index++) {
  const dupNodePhotos = photoNew.cloneNode(true);
  const photoNewIndex = OFFER.offer.photos[index];
  dupNodePhotos.src = `${photoNewIndex}`;
  listPhotos.appendChild(dupNodePhotos);
}

//Десятая подзадача задания № 2
//Замените значение атрибута src у аватарки пользователя
// .popup__avatar на значение поля author.avatar.

element.querySelector('.popup__avatar').src = OFFER.author.avatar;

//Задача успешно решена

//находит по селектору домэлемент и вставляет туда содержимое шаблона (тейплейта)
document.querySelector('#map-canvas').appendChild(element);

//Последнее требование в задаче №2
//Предусмотрите ситуацию, когда данных для заполнения не хватает.
//Например, отсутствует описание. В этом случае соответствующий блок
// в карточке скрывается.
*/
