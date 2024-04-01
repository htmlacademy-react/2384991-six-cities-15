import { PLACES_OPTIONS } from '../const.ts';

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: string;
  location?: Location;
}

export type CityLocation = {
  id: string;
  location: Location;
  name: string;
};

export type CityLocationsArray = CityLocation[];

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
};

export type HotelCardOffers = Omit<Offer, 'description' | 'goods' | 'host' | 'images'>;

type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};

export type SortingOption = typeof PLACES_OPTIONS[number];

export type LoginInfo = {
  email: string;
  password: string;
};

export type LoggedUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};
