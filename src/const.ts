const REVIEW_COUNT = 5;
const AVATAR_URL = 'https://i.pravatar.cc/128';
const URL_MARKER_DEFAULT = 'markup/img/pin.svg';
const URL_MARKER_CURRENT = 'markup/img/pin-active.svg';
const TILE_LAYER_URL_PATTERN = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const TILE_LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 300;

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

const PLACES_OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

const RATING_TITLES = ['perfect', 'good', 'not bad', 'badly', 'terribly'];

export {
  AppRoute,
  AuthorizationStatus,
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
};
