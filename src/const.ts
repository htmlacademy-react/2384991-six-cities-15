import { CityLocations } from './types/types.ts';

const MAX_PRICE_VALUE = 200;
const MAX_PHOTO_COUNT = 20;
const MAX_OFFER_IMAGE_COUNT = 6;
const OFFER_COUNT = 8;
const REVIEW_COUNT = 5;
const AVATAR_URL = 'https://i.pravatar.cc/128';

const Setting = {
  RentalsCount: 312,
} as const;

enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  EmptyMain = '/dev-main-empty',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const CITY_LOCATIONS: CityLocations = {
  Paris: { latitude: 48.85661, longitude: 2.351499, zoom: 13 },
  Cologne: { latitude: 50.938361, longitude: 6.959974, zoom: 13 },
  Brussels: { latitude: 50.846557, longitude: 4.351697, zoom: 13 },
  Amsterdam: { latitude: 52.37454, longitude: 4.897976, zoom: 13 },
  Hamburg: { latitude: 53.550341, longitude: 10.000654, zoom: 13 },
  Dusseldorf: { latitude: 51.225402, longitude: 6.776314, zoom: 13 },
};

const TYPES = ['Room', 'Apartment', 'House', 'Hotel'];

const TITLES = ['Beautiful luxurious apartment at great location', 'Wood and stone place', 'Canal View Prinsengracht', 'Nice, cozy, warm big bed apartment'];

const OFFER_INSIDE_ITEMS = ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'];

const PLACES_OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

const RATING_TITLES = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

export {
  Setting,
  AppRoute,
  AuthorizationStatus,
  MAX_PRICE_VALUE,
  MAX_PHOTO_COUNT,
  MAX_OFFER_IMAGE_COUNT,
  OFFER_COUNT,
  REVIEW_COUNT,
  CITIES,
  CITY_LOCATIONS,
  TYPES,
  TITLES,
  OFFER_INSIDE_ITEMS,
  PLACES_OPTIONS,
  RATING_TITLES,
  AVATAR_URL,
};
