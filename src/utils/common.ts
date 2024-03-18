import { Location } from '../types/types.ts';

const getRandomArrayElement = <T>(items: T[]): T => items[Math.floor(Math.random() * items.length)];

const getRandomInteger = (max: number) => Math.floor(Math.random() * max) + 1;

const getRandomBoolean = () => Math.random() >= 0.5;

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const getRandomRating = () => (Math.floor(Math.random() * 40) + 10) / 10;

const getRandomFloat = (min: number, max: number, precision: number = 2): number => parseFloat((Math.random() * (max - min) + min).toFixed(precision));

const generateHotelLocation = (cityLocation: Location): Location => {
  const latitudeOffset = getRandomFloat(-0.02, 0.02);
  const longitudeOffset = getRandomFloat(-0.02, 0.02);

  return {
    latitude: cityLocation.latitude + latitudeOffset,
    longitude: cityLocation.longitude + longitudeOffset,
    zoom: 16,
  };
};

export { getRandomArrayElement,
  getRandomInteger,
  getRandomBoolean,
  createIdGenerator,
  getRandomRating,
  generateHotelLocation,
};
