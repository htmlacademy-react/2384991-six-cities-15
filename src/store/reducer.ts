import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffers, setActiveOffer } from './action.ts';
import { Offer } from '../types/types.ts';
import { hotelOffers } from '../mocks/offers.ts';
interface OffersState {
  currentCity: string;
  offers: Offer[];
  activeOffer: Offer | null;
}

const initialState: OffersState = {
  currentCity: 'Paris',
  offers: hotelOffers,
  activeOffer: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setActiveOffer, (state, action) => {
      state.activeOffer = action.payload;
    });
});

export { reducer };
