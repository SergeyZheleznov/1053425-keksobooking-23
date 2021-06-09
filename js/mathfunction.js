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

//передаём фукцию наружу из модуля, для использования теми модулями, которые её захотят экспортировать
//для использования нужно указать значения, например, randomInteger(1, 40)
//это будет означать - найти случайное целое число из диапазона от 1 до 40

export {getRandomInteger};

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

export {getRandomDig};

getRandomDig(2,4,3);

//Функция, создающая из любого числа другое число - число с ведущим нулём, то есть из 3 создаём 03
//Здесь num это целое число из диапазона, создаётся вызовом функции randomInteger(min, max),
//a places - это общее число цифр в числе с ведущим нулём, то есть если places = 2, то число будет 03 (две цифры)

const getZeroPad = (number, places) => String(number).padStart(places, '0');

export {getZeroPad};

getZeroPad (2,2);
