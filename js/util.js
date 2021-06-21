import { getRandomInteger } from './mathfunction.js';
import { getRandomDig } from './mathfunction.js';
import { getZeroPad } from './mathfunction.js';

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const TIMEIN = [
  '12.00',
  '13.00',
  '14.00',
];

const TIMEOUT = [
  '12.00',
  '13.00',
  '14.00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

// Задание author, создать объект — описывает автора. Содержит одно поле:

// аvatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 8 с ведущим нулём.
// Например, 01, 02 и т. д. Адреса изображений не повторяются.
const createAuthor = () => {
  //Сначала найдём случайное значение от 1 до 8 и выведем его в консоль.
  const num = getRandomInteger(1, 8);
  //Теперь сделаем его числом с ведущим нулём.
  const userNumber = getZeroPad(num, 2);

  //Создаём объект Author в соответствии с заданием
  const author = {
    avatar: `img/avatars/user${userNumber}.png`,
  };
  return {
    author,
  };
};

// в консоль выскакивает объект с двумя свойствами, первое нормально, второе какое-то __proto__:Object, я его не делал. Спросить у наставника.

const createFeatures = () => {
  //функция по созданию массива строк случайной длины из значений:
  //wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
  //Назовём нужный нам массив mustArray
  //массив FEATURES у нас размещён ранее, в районе строки 86

  //находим случайное целое число из диапазона от 1 до 6. Это будет длина будущего массива
  const lengthArray = getRandomInteger(1, 6);

  // с того момента мы начинаем создавать массив mustArray
  //Его длина уже определена, она равна lengthArray
  //Для начала объявим пустой массив

  const mustArray = [];

  //Делаем цикл, который формирует массив mustArray нужной длины
  //то есть длины, равной lengthArray
  //Для начала объявим о создании временного массива для хранения номеров элементов

  const timeArray = [];

  //Делаем цикл, который формирует массив mustArray нужно длины.
  //то есть длины, которая равна lengthArray

  for (let index = 0; index <= (lengthArray - 1); index++) {
    //Находим случайное число из диапазона от 1 до 6. Если вычесть из этого числа единицу, то это будет номер элемента,
    //из массива FEATURES, который пойдёт в массив mustArray. В результате двух операций мы нашли номер массива элемента FEATURES
    let num1 = getRandomInteger(1, 6);
    let numberElement = num1 - 1;

    if (timeArray.includes(numberElement)) {
      num1 = getRandomInteger(1, 6);
      numberElement = num1 - 1;
      index = index - 1;
    } else {
      // Добавляем этот номер элемента numberElement в этот массив
      timeArray.push(numberElement);
    }
  }

  //формируем массив mustArray длины lengthArray и кладём туда значения из FEATURES
  // с номерами массива timeArray

  for (let index = 0; index <= (lengthArray - 1); index++) {
    mustArray.push(FEATURES[timeArray[index]]);
  }

  return mustArray;
};

const createPhotos = () => {
  const lengthArray = getRandomInteger(1, 3);
  const mustArray1 = [];
  const timeArray1 = [];

  for (let index = 0; index <= (lengthArray - 1); index++) {
    let num1 = getRandomInteger(1, 3);
    let numberElement = num1 - 1;

    if (timeArray1.includes(numberElement)) {
      num1 = getRandomInteger(1, 3);
      numberElement = num1 - 1;
      index = index - 1;
    } else {
      timeArray1.push(numberElement);
    }
  }

  for (let index = 0; index <= (lengthArray - 1); index++) {
    mustArray1.push(PHOTOS[timeArray1[index]]);
  }
  return mustArray1;
};

// второй объект offer в главном объекте массива, содержит информацию об объявлении, состоит из 11 полей
//Здесь мы создали массив из возможных типов жилья, потом написали фунцию, которая случайным образом
//выбирает из этих типов один тип жилья, и потом выдали в консоль результат работы этой фунции

const createOffer = (location) => {

  const priceNumber = getRandomInteger(1, 1000000);
  const roomsNumber = getRandomInteger(1, 20);
  const guestsNumber = getRandomInteger(1, 100);

  const getRandomArrayElement = (elements) => elements[_.random(0, elements.length - 1)];

  return {
    title: 'Предлагаем вам отличное жильё',
    address: `${location.lat}, ${location.lng}`,
    price: priceNumber,
    type: getRandomArrayElement(TYPES),
    rooms: roomsNumber,
    guests: guestsNumber,
    checkin: getRandomArrayElement(TIMEIN),
    checkout: getRandomArrayElement(TIMEOUT),
    features: createFeatures(),
    description: 'Очень хорошее помещение на все случаи жизни',
    photos: createPhotos(),
  };
};

//создаём объект location в соответствии с заданием.
// Задание:  объект location — местоположение в виде географических координат. Состоит из двух полей:
// lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.
// lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000.

//создаём функция для нахождения нашего объекта location
const createLocation = () => {

  //находим число с плавающей точкой для широты
  const latitude = getRandomDig(35.65000, 35.70000, 5);

  //находим число с плавающей точкой для долготы
  const longitude = getRandomDig(139.70000, 139.80000, 5);

  //создаём искомый объект
  const location = {
    lat: latitude,
    lng: longitude,
  };
  //возвращаем искомый объект из функции.
  return (location);
};

//Создаём главный объект, это предложение жилья.
//Он состоит из трёх объектов, которые мы уже создали ранее.

const createProposal = () => {
  const location = createLocation();
  const proposal = {
    author: createAuthor(),
    offer: createOffer(location),
    location: location,
  };

  return proposal;
};

const arrayProposal = [];

for (let index = 0; index <= 8; index++) {
  arrayProposal[index] = createProposal();
  arrayProposal.push(arrayProposal[index]);
}

//формируем массив из 10 предложение, согласно заданию.
//В файле main.js на основе написанных в прошлом задании вспомогательных функций напишите необходимые функции для создания массива
// из 10 сгенерированных JS-объектов. Каждый объект массива — описание похожего объявления неподалёку

const tenProposal = [];

for (let index = 0; index <= 9; index++) {
  tenProposal[index] = createProposal();
  tenProposal.push[tenProposal[index]];
}

const OFFER = arrayProposal[0];
//createOffer({lat:'232323', lng:'232323'});


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

const authorCreate = createAuthor();

element.querySelector('.popup__avatar').src = authorCreate.author.avatar;

//Задача успешно решена

//находит по селектору домэлемент и вставляет туда содержимое шаблона (тейплейта)
document.querySelector('#map-canvas').appendChild(element);

//Последнее требование в задаче №2
//Предусмотрите ситуацию, когда данных для заполнения не хватает.
//Например, отсутствует описание. В этом случае соответствующий блок
// в карточке скрывается.
