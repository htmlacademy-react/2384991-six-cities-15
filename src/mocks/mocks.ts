import { getRandomArrayElement, getRandomInteger, getRandomBoolean, createIdGenerator } from '../utils/common.ts';
import { OFFER_COUNT, MAX_PRICE_VALUE, MAX_PHOTO_COUNT, TYPES, TITLES } from '../const.ts';

const offersId = createIdGenerator();

const getRandomMockOffers = () => {

  const offerId = offersId().toString();

  const randomType = getRandomArrayElement(TYPES);

  const randomTitle = getRandomArrayElement(TITLES);

  return {
    id: offerId,
    title: randomTitle,
    type: randomType,
    price: getRandomInteger(MAX_PRICE_VALUE),
    isFavorite: getRandomBoolean(),
    isPremium: getRandomBoolean(),
    previewImage: `img/apartment-0${getRandomInteger(MAX_PHOTO_COUNT)}.jpg`,
  };
};

const hotelOffers = Array.from({length: getRandomInteger(OFFER_COUNT)}, getRandomMockOffers);


export { hotelOffers };
