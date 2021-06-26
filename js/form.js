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

// нужно вызывать метод setCustomValidity у нужного элемента с нужным текстом,
// что бы при отправке неправильно заполненной формы сообщение об ошибке выскакивало

const selectRooms = document.querySelector('#room_number');
const selectCapacity = document.querySelector('#capacity');

selectRooms.addEventListener('change', () => {
  if (selectRooms.value === '1') {
    selectCapacity.setCustomValidity('Одна комната только для одного гостя');
  } else if (selectRooms.value === '2') {
    selectCapacity.setCustomValidity('Две комнаты только для одного гостя или для двух гостей');
  } else if (selectRooms.value === '3') {
    selectCapacity.setCustomValidity('Две комнаты только для одного гостя, для двух гостей или трёх гостей');
  } else if (selectRooms.value === '100') {
    selectCapacity.setCustomValidity('не для гостей');
  } else {
    selectCapacity.setCustomValidity('');
  }

  selectCapacity.reportValidity();
});

/*
const selectRooms = document.querySelector('#room_number'); //передал селект с комнатами в переменную

const elementOption3 = document.querySelector('#capacity3');
console.log(elementOption3);
const elementOption2 = document.querySelector('#capacity2');
const elementOption1 = document.querySelector('#capacity1');
const elementOption0 = document.querySelector('#capacity0');

selectRooms.addEventListener('change', function () { //повесил на этот селект обработчик,
  // если там что-то, то он сработает
  const roomsNumber = this.value;
  console.log (roomsNumber);
  if (roomsNumber == '1') {
    elementOption3.disabled = true;
    elementOption2.disabled = true;
    elementOption1.disabled = false;
    elementOption0.disabled = true;
    console.log (elementOption3);
    console.log (elementOption2);
    console.log (elementOption1);
    console.log (elementOption0);
  }  else if (roomsNumber == '2' ){
    elementOption3.disabled = true;
    elementOption2.disabled = false;
    elementOption1.disabled = false;
    elementOption0.disabled = true;
    console.log (elementOption3);
    console.log (elementOption2);
    console.log (elementOption1);
    console.log (elementOption0);
  } else if (roomsNumber == '3'){
    elementOption3.disabled = false;
    elementOption2.disabled = false;
    elementOption1.disabled = false;
    elementOption0.disabled = true;
    console.log (elementOption3);
    console.log (elementOption2);
    console.log (elementOption1);
    console.log (elementOption0);
  } else if (roomsNumber == '100'){
    elementOption3.disabled = false;
    elementOption2.disabled = false;
    elementOption1.disabled = false;
    elementOption0.disabled = true;
    console.log (elementOption3);
    console.log (elementOption2);
    console.log (elementOption1);
    console.log (elementOption0);
  }
});

*/

//Этот обработчик с ошибкой, не работает.
/*
const form = document.querySelector('.ad-form');
form.addEventListener('sumbit', function () {

const listRooms = document.querySelector('#capacity');

listRooms.innerHTML = '';
const elementOption1 = document.createElement('option');
const elementOption2 = document.createElement('option');
const elementOption3 = document.createElement('option');
const elementOption100 = document.createElement('option');

const select = document.querySelector('#room_number');

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
*/
