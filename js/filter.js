const NUMBERS_OF_OFFERS = 10;

const checkType = (data) => {
  const housingType = document.querySelector('#housing-type');
  const housingTypeRus = housingType.options[housingType.selectedIndex].text;
  if (housingTypeRus === 'Любой тип жилья' || housingTypeRus === data.offer.type) {
    return true;
  }
  return false;
};

const checkPrice = (data) => {
  const housingPrice = document.querySelector('#housing-price').value;
  const dataOfferPrice = data.offer.price;

  const getPriceRange = (value) => {
    const priceRanges = {
      'middle': {
        from: 10000,
        to: 50000,
      },
      'low': {
        from: 0,
        to: 10000,
      },
      'high': {
        from: 50000,
        to: 1000000,
      },
    };
    return priceRanges[value];
  };
  const range = getPriceRange(housingPrice);
  if (housingPrice === 'any') {
    return true;
  } else if (dataOfferPrice >= range.from && dataOfferPrice <= range.to) {
    return true;
  }
  return false;
};

const checkRooms = (data) => {
  const housingRooms = document.querySelector('#housing-rooms').value;
  if (housingRooms === 'any' || housingRooms === String(data.offer.rooms)) {
    return true;
  }
  return false;
};

const checkGuests = (data) => {
  const housingGuests = document.querySelector('#housing-guests').value;
  if (housingGuests === 'any' || housingGuests === String(data.offer.guests)) {
    return true;
  }
  return false;
};

const checkFeatures = (data) => {
  const checkedFeaturesList = document.querySelectorAll('.map__checkbox:checked');

  const checkedFeaturesListValue = [];
  for (let index = 0; index < checkedFeaturesList.length; index++) {
    checkedFeaturesList[index];
    checkedFeaturesListValue[index] = checkedFeaturesList[index].value;
  }

  const dataOfferFeatures = data.offer.features;

  if (checkedFeaturesListValue.length === 0) {
    return true;
  } else {
    if (dataOfferFeatures !== undefined) {
      return checkedFeaturesListValue.every((element) => dataOfferFeatures.includes(element));
    }
    return false;
  }
};

const filterOffers = (offers) =>
  offers.filter((data) => checkType(data) && checkPrice(data) &&
    checkRooms(data) && checkGuests(data) && checkFeatures(data)).slice(0, NUMBERS_OF_OFFERS);

export { filterOffers };

