const getData = () =>
  fetch(
    'https://23.javascript.pages.academy/keksobooking/data',
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((response) => response.json());

const sendData = (data) =>
  fetch(
    'https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: data,
    },
  );

export { getData, sendData };
