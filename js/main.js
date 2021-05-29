//Функция, возвращающая случайное целое число из переданного диапазона включительно
//https://habr.com/ru/company/ruvds/blog/534108/

const getRandomInteger = (min,max) => {
  if (min > max || min < 0) {
    alert('Произошла ошибка при вводе диапазона, либо минимальное значение больше максимального или равно ему, либо задан отрицательный диапазон, введете диапазон правильно');
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

console.log(getRandomInteger(9, 10));

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

let res2 = 0;

const getRandomDig = (min, max, numbersAfterComma) => {
  if (min > max) {
    alert('Произошла ошибка при вводе диапазона, либо минимальное значение больше максимального или равно ему, либо задан отрицательный диапазон, введете диапазон правильно');
  } else {
    res2 = Math.random() * (max - min) + min;
    return res2.toFixed(numbersAfterComma);
  }
};

console.log (getRandomDig(6, 11, 3));
