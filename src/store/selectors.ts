import { RootState } from '../types/state.ts';

const selectCity = (state: RootState) => state.currentCity;
const selectOffers = (state: RootState) => state.offers;
const selectActiveOffer = (state: RootState) => state.activeOffer;

export { selectCity, selectOffers, selectActiveOffer };
