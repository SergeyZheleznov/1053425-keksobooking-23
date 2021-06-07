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

const getRandomInteger = (min,max) => {
  if (min > max) {
    let res = 0;
    res = min;
    min = max;
    max = res;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

getRandomInteger (1,4);

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

const getRandomDig = (min, max, numbersAfterComma) => {
  if (min > max) {
    let res = 0;
    res = min;
    min = max;
    max = res;
    const res2 = Math.random() * (max - min) + min;
    return res2.toFixed(numbersAfterComma);
  } else {
    const res2 = Math.random() * (max - min) + min;
    return res2.toFixed(numbersAfterComma);
  }
};

getRandomDig(2,4,3);


// Задание author, создать объект — описывает автора. Содержит одно поле:

// аvatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 8 с ведущим нулём.
// Например, 01, 02 и т. д. Адреса изображений не повторяются.
const createAuthor = () => {
//Сначала найдём случайное значение от 1 до 8 и выведем его в консоль.
  const num = getRandomInteger (1,8);
  const zeroPad = (num1, places) => String(num1).padStart(places, '0');
  const userNumber =  zeroPad(num, 2);

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
  const lengthArray = getRandomInteger(1,6);

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
    let num1 = getRandomInteger(1,6);
    let numberElement = num1 - 1;

    if (timeArray.includes(numberElement)) {
      num1 = getRandomInteger(1,6);
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
  const lengthArray = getRandomInteger(1,3);
  const mustArray1 = [];
  const timeArray1 = [];

  for (let index = 0; index <= (lengthArray - 1); index++) {
    let num1 = getRandomInteger(1,3);
    let numberElement = num1 - 1;

    if (timeArray1.includes(numberElement)) {
      num1 = getRandomInteger(1,3);
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

  const priceNumber = getRandomInteger (1,1000000);
  const roomsNumber = getRandomInteger(1,20);
  const guestsNumber = getRandomInteger(1,100);

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

for ( let index = 0; index <= 8; index++) {
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
