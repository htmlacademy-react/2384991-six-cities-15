import { RootState } from '../types/state.ts';

const selectCity = (state: RootState) => state.currentCity;
const selectOffers = (state: RootState) => state.offers;
const selectActiveOffer = (state: RootState) => state.activeOffer;
const selectSortingOption = (state: RootState) => state.selectedSortingOption;
const selectErrorMessage = (state: RootState) => state.error;
const selectAuthorizationStatus = (state: RootState) => state.authorizationStatus;
const selectOffersDataLoading = (state: RootState) => state.isOffersDataLoading;

export {
  selectCity,
  selectOffers,
  selectActiveOffer,
  selectSortingOption,
  selectErrorMessage,
  selectAuthorizationStatus,
  selectOffersDataLoading,
};
