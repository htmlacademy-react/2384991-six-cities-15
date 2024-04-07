import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffers, setActiveOffer, setSortingOption, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus, setUser, clearError, setOfferDetails, setNearbyOffers, setOfferComments, updateOffer } from './action.ts';
import { Offer, LoggedUser, Review } from '../types/types.ts';
import { AuthorizationStatus } from '../const.ts';
import { postComment, fetchFavoriteOffers } from './api-action.ts';

interface OffersState {
  currentCity: string;
  offers: Offer[];
  activeOffer: Offer | null;
  selectedSortingOption: string;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersDataLoading: boolean;
  user: LoggedUser | null;
  offerDetails: Offer | null;
  offerComments: Review[];
  nearbyOffers: Offer[];
  isOneOfferDataLoading: boolean;
  favoriteOffers: Offer[];
}

const initialState: OffersState = {
  currentCity: 'Paris',
  offers: [],
  activeOffer: null,
  selectedSortingOption: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
  user: null,
  offerDetails: null,
  offerComments: [],
  nearbyOffers: [],
  isOneOfferDataLoading: false,
  favoriteOffers: [],
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
    })
    .addCase(setSortingOption, (state, action) => {
      state.selectedSortingOption = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(clearError, (state) => {
      state.error = null;
    })
    .addCase(setOfferDetails, (state, action) => {
      state.offerDetails = action.payload;
    })
    .addCase(setOfferComments, (state, action) => {
      state.offerComments = action.payload;
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(postComment.fulfilled, (state, action) => {
      state.offerComments = [action.payload[0], ...state.offerComments];
    })
    .addCase(updateOffer, (state, action) => {
      const index = state.offers.findIndex((offer) => offer.id === action.payload.id);
      if (index !== -1) {
        state.offers[index] = action.payload;
      }
    })
    .addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
      state.favoriteOffers = action.payload;
    });
});

export { reducer };
