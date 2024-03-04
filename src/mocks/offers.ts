import { getRandomArrayElement, getRandomInteger, getRandomBoolean, createIdGenerator, getRandomRating, generateHotelLocation } from '../utils/common.ts';
import { OFFER_COUNT, MAX_PRICE_VALUE, MAX_PHOTO_COUNT, TYPES, TITLES, CITY_LOCATIONS } from '../const.ts';
import { Offer } from '../types/types.ts';

const offersId = createIdGenerator();

const getRandomMockOffers = ():Offer => {

  const offerId = offersId().toString();

  const randomType = getRandomArrayElement(TYPES);

  const randomTitle = getRandomArrayElement(TITLES);

  const randomCity = getRandomArrayElement(Object.keys(CITY_LOCATIONS));

  const cityLocation = CITY_LOCATIONS[randomCity];

  const hotelLocation = generateHotelLocation(cityLocation);

  const randomRating = getRandomRating();

  return {
    id: offerId,
    title: randomTitle,
    type: randomType,
    price: getRandomInteger(MAX_PRICE_VALUE),
    previewImage: `https://15.design.htmlacademy.pro/static/hotel/${getRandomInteger(MAX_PHOTO_COUNT)}.jpg`,
    city: {
      name: randomCity,
      location: cityLocation,
    },
    location: hotelLocation,
    isFavorite: getRandomBoolean(),
    isPremium: getRandomBoolean(),
    rating: randomRating,
  };
};

const hotelOffers = Array.from({length: getRandomInteger(OFFER_COUNT)}, getRandomMockOffers);

export { hotelOffers };
