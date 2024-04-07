import { RootState } from '../types/state.ts';

const selectCity = (state: RootState) => state.currentCity;
const selectOffers = (state: RootState) => state.offers;
const selectActiveOffer = (state: RootState) => state.activeOffer;
const selectSortingOption = (state: RootState) => state.selectedSortingOption;
const selectErrorMessage = (state: RootState) => state.error;
const selectAuthorizationStatus = (state: RootState) => state.authorizationStatus;
const selectOffersDataLoading = (state: RootState) => state.isOffersDataLoading;
const selectUser = (state: RootState) => state.user;
const selectOfferDetails = (state: RootState) => state.offerDetails;
const selectOfferComments = (state: RootState) => state.offerComments;
const selectNearbyOffers = (state: RootState) => state.nearbyOffers;

export {
  selectCity,
  selectOffers,
  selectActiveOffer,
  selectSortingOption,
  selectErrorMessage,
  selectAuthorizationStatus,
  selectOffersDataLoading,
  selectUser,
  selectOfferDetails,
  selectOfferComments,
  selectNearbyOffers,
};
