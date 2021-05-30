//Функция, возвращающая случайное целое число из переданного диапазона включительно
//https://habr.com/ru/company/ruvds/blog/534108/

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
