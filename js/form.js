// Задача

// Поле «Количество комнат» синхронизировано с полем «Количество мест»
// таким образом, что при выборе количества комнат вводятся ограничения
// на допустимые варианты выбора количества гостей:

// 1 комната — «для 1 гостя»;
// 2 комнаты — «для 2 гостей» или «для 1 гостя»;
// 3 комнаты — «для 3 гостей», «для 2 гостей» или «для 1 гостя»;
// 100 комнат — «не для гостей».

// Обратите внимание: допускаются разные способы ограничения допустимых значений
// поля «Количество мест»: удаление из разметки соответствующих элементов option,
// добавление элементам option состояния disabled или другие способы ограничения,
// например, с помощью метода setCustomValidity.

//Этот обработчик с ошибкой, не работает.
/*const form = document.querySelector('.ad-form');
form.addEventListener('sumbit', function () {
*/
const listRooms = document.querySelector('#capacity');

listRooms.innerHTML = '';
const elementOption1 = document.createElement('option');
const elementOption2 = document.createElement('option');
const elementOption3 = document.createElement('option');
const elementOption100 = document.createElement('option');

const select = document.querySelector('#room_number'); //передал селект с комнатами в переменную

select.addEventListener('change', function () {
  const roomsNumber = this.value;
  switch (roomsNumber) {
    case '1':
      listRooms.innerHTML = '';
      elementOption1.value = 1;
      elementOption1.textContent = 'для 1 гостя';
      listRooms.appendChild(elementOption1);
      break;
    case '2':
      listRooms.innerHTML = '';
      elementOption2.value = 2;
      elementOption1.textContent = 'для 1 гостя';
      elementOption2.textContent = 'для 2 гостей';
      listRooms.appendChild(elementOption1);
      listRooms.appendChild(elementOption2);
      break;
    case '3':
      listRooms.innerHTML = '';
      elementOption3.value = 3;
      elementOption1.textContent = 'для 1 гостя';
      elementOption2.textContent = 'для 2 гостей';
      elementOption3.textContent = 'для 3 гостей';
      listRooms.appendChild(elementOption1);
      listRooms.appendChild(elementOption2);
      listRooms.appendChild(elementOption3);
      break;
    case '100':
      listRooms.innerHTML = '';
      elementOption100.value = 0;
      elementOption100.textContent = 'не для гостей';
      listRooms.appendChild(elementOption100);
      break;
  }
});
