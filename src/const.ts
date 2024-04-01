import { CityLocationsArray } from './types/types.ts';

const REVIEW_COUNT = 10;
const AVATAR_URL = 'https://i.pravatar.cc/128';
const URL_MARKER_DEFAULT = 'markup/img/pin.svg';
const URL_MARKER_CURRENT = 'markup/img/pin-active.svg';
const TILE_LAYER_URL_PATTERN = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const TILE_LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 300;
const TIMEOUT_SHOW_ERROR = 2000;
const PASSWORD_REGEXP = /^.*(?=.*[a-zA-Z])(?=.*\d).*$/;

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
enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
}

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const CITY_LOCATIONS: CityLocationsArray = [
  {
    id: 'paris',
    location: { latitude: 48.85661, longitude: 2.351499, zoom: 13 },
    name: 'Paris',
  },
  {
    id: 'cologne',
    location: { latitude: 50.938361, longitude: 6.959974, zoom: 13 },
    name: 'Cologne',
  },
  {
    id: 'brussels',
    location: { latitude: 50.846557, longitude: 4.351697, zoom: 13 },
    name: 'Brussels',
  },
  {
    id: 'amsterdam',
    location: { latitude: 52.37454, longitude: 4.897976, zoom: 13 },
    name: 'Amsterdam',
  },
  {
    id: 'hamburg',
    location: { latitude: 53.550341, longitude: 10.000654, zoom: 13 },
    name: 'Hamburg',
  },
  {
    id: 'dusseldorf',
    location: { latitude: 51.225402, longitude: 6.776314, zoom: 13 },
    name: 'Dusseldorf',
  },
];

const TYPES = ['Room', 'Apartment', 'House', 'Hotel'];

const PLACES_OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'] as const;

const RATING_TITLES = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

export {
  AppRoute,
  AuthorizationStatus,
  APIRoute,
  REVIEW_COUNT,
  CITIES,
  TYPES,
  PLACES_OPTIONS,
  RATING_TITLES,
  AVATAR_URL,
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT,
  TILE_LAYER_URL_PATTERN,
  TILE_LAYER_ATTRIBUTION,
  MIN_REVIEW_LENGTH,
  MAX_REVIEW_LENGTH,
  CITY_LOCATIONS,
  TIMEOUT_SHOW_ERROR,
  PASSWORD_REGEXP,
};
