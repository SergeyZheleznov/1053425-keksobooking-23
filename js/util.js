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
    avatar: `img/avatars/${userNumber}.png`,
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

const createOffer = () => {

  const priceNumber = getRandomInteger(1, 1000000);
  const roomsNumber = getRandomInteger(1, 20);
  const guestsNumber = getRandomInteger(1, 100);

  const getRandomArrayElement = (elements) => elements[_.random(0, elements.length - 1)];

  return {
    title: 'Предлагаем вам отличное жильё',
    address: 'location.x, location.y',
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
  const proposal = {
    author: createAuthor(),
    offer: createOffer(),
    location: createLocation(),
  };

  return {
    proposal,
  };
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

//Достаю из шаблона его содержимое и присваиваю переменной element
const template = document.querySelector('#card').content;
const element = template.querySelector('.popup');

//клонирую это содержимое
//const clonedElement = element.cloneNode(true);


//вызываю функцию, чтобы она дала нам все значения для всех нужных строк
//предложения и вывожу посмотреть что эта функция выдала
const OFFER = createOffer();

//начинаю делать первое задание - заголовок объявления offer_title
//вывести в заголовок popup__title

//1. Присваиваю значение тега h3 переменной popupTitle
const popupTitle = element.querySelector('h3');
//2. Вывожу текстовое содержимое этого тега в консоль
//Это значание, которое с шаблоне в HTML

//3. создаю переменную offerTitle и присваиваю ей новое значение заголовка
//нового предложения. После этого вывожу это значение в консоль
const offerTitle = OFFER.title;

//4. передаю новое значание заголовка в текстовое содержимое h3
popupTitle.textContent = offerTitle;

// Успешно сделал первое задание

//Следующее задание:
//нужно ввести адрес offer.address в блок .popup__text--address

//0. смотрю, что у нас с адресом
//выводится значение с иксом и игреком, ладно.

//1. Создаю перемееную popupAddress и присваиваю значение тега p
//c классом popup__text--address это переменной
const popupAddress = element.querySelector('.popup__text--address');

//2. Вывожу текстовое содержимое этого тега в консоль
//Это значание, которое с шаблоне в HTML

//3. создаю переменную offerTitle и присваиваю ей новое значение заголовка
//нового предложения. После этого вывожу это значение в консоль
const offerAddress = OFFER.address;

//4. Передаю новое значение адреса в текстовое содержимое тега p
// и вывожу в консоль, чтобы посмотреть на новый адрес
popupAddress.textContent = offerAddress;

//Задание 2 успешно выполнено. Всё ОК.

//Задание 3 Выведите цену offer.price в блок .popup__text--price
//строкой вида {{offer.price}} ₽/ночь. Например, «5200 ₽/ночь».

//0.смотрю, что у нас с ценой
//выводится шестизначное число. Всё нормально.

//1.Нужно как-то вставить это число, не меняя то, что внутри тега span
//присваиваю значение тега p c классом popup__text--price
//переменной popupPrice
const popupTextPrice = element.querySelector('.popup__text--price');

//передаю последний текст в текстовое содержимое тегу
//всё хорошо, всё работает
popupTextPrice.innerHTML = `${OFFER.price} + '<span> ₽/ночь </span>'`;

//задание успешно выполнено, применён опасный код innerHTML

//Задание 4
//В блок .popup__type выведите тип жилья offer.type, сопоставив с подписями:
// Квартира для flat
// Бунгало для bungalow
// Дом для house
// Дворец для palace
// Отель для hotel

//0. Смотрю, какое новое предложение выдала функция
//Выдаёт только одно значение

// 1.присваиваю значение тега p c классом popup__text--type
//переменной popupType

const popupType = element.querySelector('.popup__type');

//2. Вывожу текстовое содержимое этого тега в консоль

//3. создаю переменную offerType и присваиваю ей новое значение типа жилья
//нового предложения. После этого вывожу это значение в консоль
const offerType = OFFER.type;

//4. Присваиваю это новое значение тегу p c классом popup_type

popupType.textContent = offerType;

//5. Занимаемся переводом тивов жилья с английского на русский язык

if (popupType.textContent === 'bungalow') {
  popupType.textContent = 'Бунгало';
} else {
  if (popupType.textContent === 'house') {
    popupType.textContent = 'Дом';
  } else {
    if (popupType.textContent === 'palace') {
      popupType.textContent = 'Дворец';
    } else {
      if (popupType.textContent === 'flat') {
        popupType.textContent = 'Квартира';
      } else {
        if (popupType.textContent === 'hotel') {
          popupType.textContent = 'Отель';
        }
      }
    }
  }
}

//Задача № 4 успешно решена, всё работает, переводит
//Возможно, алгоритм не очень эффективный, но работает

//Задача № 5
// Выведите количество гостей и комнат offer.rooms и offer.guests
// в блок .popup__text--capacity
// строкой вида {{offer.rooms}} комнаты для {{offer.guests}} гостей.
// Например, «2 комнаты для 3 гостей.

//0. Смотрю, какое новое предложение выдала функция
//1. Присваиваю значение переменной popupCapasity
// Это значание равно текстовому значению тега p с классом popup__text--capacity

const popupCapacity = element.querySelector('.popup__text--capacity');

//2. Вывожу текстовое значение этой переменной в консоль.


//3. Создаю переменную offerRooms для хранения числа гостей
// и присваиваю ей число гостей.
const offerRooms = OFFER.rooms;

//3. Создаю переменную offerGuests для хранения числа гостей
// и присваиваю ей число гостей.
const offerGuests = OFFER.guests;

// 4. Создаю переменную для хранения фразы "N комнат для M гостей"
//   и присваиваю ей значание этой фразы.
// здесь бы сделать что-то с окончаниями на случай, если окончания неверны

const capacity = `${offerRooms} + ' комнаты для ' + ${offerGuests} + ' гостей'`;

// 5. Присваиваем это значание тегу p c классом  popup__text--capacity

popupCapacity.textContent = capacity;

//Задача № 5 успешно решена

// Задача № 6
// Время заезда и выезда offer.checkin и offer.checkout в блок
// .popup__text--time строкой вида Заезд после {{offer.checkin}},
// выезд до {{offer.checkout}}. Например, «Заезд после 14:00, выезд до 14:00»

//0. Смотрю, какое новое предложение выдала функция

//1. Присваиваю значение переменной popupCapasity
// Это значание равно текстовому значению тега p с классом popup__text--capacity

const popupTime = element.querySelector('.popup__text--time');

//2. Вывожу текстовое значение этой переменной в консоль.

//3. Создаю переменную offerRooms для хранения числа гостей
// и присваиваю ей число гостей.
const offerCheckin = OFFER.checkin;

//3. Создаю переменную offerGuests для хранения числа гостей
// и присваиваю ей число гостей.
const offerCheckout = OFFER.checkout;

// 4. Создаю переменную для хранения фразы "N комнат для M гостей"
//   и присваиваю ей значание этой фразы.
// здесь бы сделать что-то с окончаниями на случай, если окончания неверны

const popupNewTime = `'Заезд до ' + ${offerCheckin} + ', выезд после ' + ${offerCheckout}`;

// 5. Присваиваем это значание тегу p c классом  popup__text--capacity

popupTime.textContent = popupNewTime;

//Задача № 6 успешно решена

//Задача №8
//В блок .popup__description выведите описание объекта
// недвижимости offer.description.

// 0. Смотрим, какое значение даёт функция.

//1. Создаю перемееную popupDescription и присваиваю значение тега p
//c классом popup__description этой переменной
const popupDescription = element.querySelector('.popup__description');

//2. Вывожу текстовое значение этой переменной в консоль.

//3. создаю переменную offerDescription и присваиваю ей новое значение заголовка
//нового предложения. После этого вывожу это значение в консоль
const offerDescription = OFFER.description;

//4. Передаю новое значение описания в текстовое содержимое тега p
// и вывожу в консоль, чтобы посмотреть на новый адрес
popupDescription.textContent = offerDescription;

//Задача № 8 успешно решена
