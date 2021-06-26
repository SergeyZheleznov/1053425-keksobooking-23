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

const listenerRoomsCapacity = () => {
  if (selectRooms.value === '1' && selectCapacity.value !== '1') {
    selectCapacity.setCustomValidity('Одна комната только для одного гостя');
  } else if (selectRooms.value === '2' && selectCapacity.value !== '1' && selectCapacity.value !== '2') {
    selectCapacity.setCustomValidity('Две комнаты только для одного гостя или для двух гостей');
  } else if (selectRooms.value === '3' && selectCapacity.value !== '1' && selectCapacity.value !== '2' && selectCapacity.value !== '3') {
    selectCapacity.setCustomValidity('Две комнаты только для одного гостя, для двух гостей или трёх гостей');
  } else if (selectRooms.value === '100' && selectCapacity.value !== '0') {
    selectCapacity.setCustomValidity('не для гостей');
  } else {
    selectCapacity.setCustomValidity('');
  }

  selectCapacity.reportValidity();
};

selectRooms.addEventListener('change', listenerRoomsCapacity);

selectCapacity.addEventListener('change', listenerRoomsCapacity);
