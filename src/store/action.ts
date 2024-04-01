import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/types.ts';
import { AuthorizationStatus } from '../const.ts';

export const setCity = createAction<string>('offers/setCity');
export const setOffers = createAction<Offer[]>('offers/setOffers');
export const setActiveOffer = createAction<Offer | null>('offers/setActiveOffer');
export const setSortingOption = createAction<string>('offers/setSortingOption');
export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('app/error');

