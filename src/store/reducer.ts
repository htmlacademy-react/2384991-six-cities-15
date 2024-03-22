import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffers } from './action.ts';
import { CITY_LOCATIONS } from '../const.ts';
import { Offer, Location } from '../types/types.ts';

interface OffersState {
  city: Location;
  offers: Offer[];
}

const initialState: OffersState = {
  city: CITY_LOCATIONS['Paris'],
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      const cityName = action.payload;
      const cityLocation = CITY_LOCATIONS[cityName];
      if (cityLocation) {
        state.city = cityLocation;
      }
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };
