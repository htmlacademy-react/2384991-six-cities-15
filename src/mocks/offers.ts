import { getRandomArrayElement, getRandomInteger, getRandomBoolean, createIdGenerator, getRandomRating, generateHotelLocation } from '../utils/common.ts';
import { Offer, Host } from '../types/types.ts';
import { CityLocations, Location } from '../types/types.ts';
import { AVATAR_URL, TYPES } from '../const.ts';

const MAX_PRICE_VALUE = 200;

const MAX_BEDROOMS = 5;
const OFFER_COUNT = 50;
const MAX_OFFER_IMAGE_COUNT = 6;
const MAX_PHOTO_COUNT = 20;

const TITLES = ['Beautiful luxurious apartment at great location', 'Wood and stone place', 'Canal View Prinsengracht', 'Nice, cozy, warm big bed apartment'];
const OFFER_INSIDE_ITEMS = ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'];

const DESCRIPTIONS = [
  ' providing a unique combination of historical charm and modern comfort. Situated in a picturesque area that captivates with its tranquility and the beauty of nature.',
  ' in the heart of the city with all amenities for a comfortable stay. Ideal for both short visits and longer stays.',
  ' located in a serene neighborhood, offering peace and tranquility away from the hustle and bustle of the city center.',
  ' with a lovely view of the surroundings, perfect for solo travelers or couples looking for a romantic getaway.',
  ' in a historic building, blending classic architecture with modern comforts for an unforgettable experience.'
];

const CITY_LOCATIONS: CityLocations = {
  Paris: { latitude: 48.85661, longitude: 2.351499, zoom: 13 },
  Cologne: { latitude: 50.938361, longitude: 6.959974, zoom: 13 },
  Brussels: { latitude: 50.846557, longitude: 4.351697, zoom: 13 },
  Amsterdam: { latitude: 52.37454, longitude: 4.897976, zoom: 13 },
  Hamburg: { latitude: 53.550341, longitude: 10.000654, zoom: 13 },
  Dusseldorf: { latitude: 51.225402, longitude: 6.776314, zoom: 13 },
};

const AMSTERDAM_HOTEL_LOCATIONS = [
  { latitude: 52.3909553943508, longitude: 4.85309666406198, zoom: 8 },
  { latitude: 52.3609553943508, longitude: 4.85309666406198, zoom: 8 },
  { latitude: 52.3909553943508, longitude: 4.929309666406198, zoom: 8 },
  { latitude: 52.3809553943508, longitude: 4.939309666406198, zoom: 8 },
];

const HOSTS: Host[] = [
  {
    name: 'Alice Johnson',
    avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    isPro: getRandomBoolean(),
  },
  {
    name: 'Mike Brown',
    avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    isPro: getRandomBoolean(),
  },
  {
    name: 'Liam Smith',
    avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    isPro: getRandomBoolean(),
  },
  {
    name: 'Sophia Wilson',
    avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    isPro: getRandomBoolean(),
  },
  {
    name: 'Ethan Hunt',
    avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    isPro: getRandomBoolean(),
  }
];

const offersId = createIdGenerator();

const getRandomGoods = (items: string[]): string[] => {
  const maxGoods = items.length;
  const randomCount = Math.floor(Math.random() * maxGoods) + 1;
  return items.slice(0, randomCount);
};

const getRandomMockOffers = ():Offer => {

  const offerId = offersId().toString();

  const randomType = getRandomArrayElement(TYPES);

  const randomTitle = getRandomArrayElement(TITLES);

  const randomCity = getRandomArrayElement(Object.keys(CITY_LOCATIONS));

  const cityLocation = CITY_LOCATIONS[randomCity];

  const hotelLocation: Location = generateHotelLocation(cityLocation);

  const randomRating = getRandomRating();

  const randomBedroomsNumber = getRandomInteger(MAX_BEDROOMS);

  const randomGoods = getRandomGoods(OFFER_INSIDE_ITEMS);

  const randomDescription = getRandomArrayElement(DESCRIPTIONS);

  const randomHost = getRandomArrayElement(HOSTS);

  const randomImages: string[] = [];
  for (let i = 0; i < MAX_OFFER_IMAGE_COUNT; i++) {
    randomImages.push(`https://15.design.htmlacademy.pro/static/hotel/${getRandomInteger(MAX_PHOTO_COUNT)}.jpg`);
  }

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
    bedrooms: randomBedroomsNumber,
    maxAdults: randomBedroomsNumber * 2,
    goods: randomGoods,
    description: randomType + randomDescription,
    host: randomHost,
    images: randomImages,
  };
};

const hotelOffers = Array.from({length: getRandomInteger(OFFER_COUNT)}, getRandomMockOffers);

export { hotelOffers, CITY_LOCATIONS, AMSTERDAM_HOTEL_LOCATIONS };
