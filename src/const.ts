const MAX_PRICE_VALUE = 200;
const MAX_PHOTO_COUNT = 3;
const MAX_OFFER_IMAGE_COUNT = 6;
const OFFER_COUNT = 8;
const REVIEW_COUNT = 5;

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

const TYPES = ['Room', 'Apartment', 'House', 'Hotel'];

const TITLES = ['Beautiful luxurious apartment at great location', 'Wood and stone place', 'Canal View Prinsengracht', 'Nice, cozy, warm big bed apartment'];

const OFFER_INSIDE_ITEMS = ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'];

const PLACES_OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

const RATING_TITLES = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  isFavorite: boolean;
  isPremium: boolean;
  previewImage: string;
  city: {
    name: string;
  };
};

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
  TYPES,
  TITLES,
  OFFER_INSIDE_ITEMS,
  PLACES_OPTIONS,
  RATING_TITLES,
};
