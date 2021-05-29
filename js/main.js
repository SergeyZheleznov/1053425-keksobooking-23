//Функция, возвращающая случайное целое число из переданного диапазона включительно
//https://habr.com/ru/company/ruvds/blog/534108/

const res1;
let res2;

function randomInteger(min,max) {
  if (min => max && min < 0) {
    alert('Произошла ошибка при вводе диапазона, либо минимальное значение больше максимального или равно ему, либо задан отрицательный диапазон, введете диапазон правильно');
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.


function randomDig(min, max, numbersAfterComma) {
  if (min => max && min < 0) {
    alert('ППроизошла ошибка при вводе диапазона, либо минимальное значение больше максимального или равно ему, либо задан отрицательный диапазон, введете диапазон правильно');
  } else {
    res2 = Math.random() * (max - min) + min;
    return res2.toFixed(numbersAfterComma);
  }
};

res1 = randomInteger (1,4);

res2 = randomDig (10, 11, 6);
