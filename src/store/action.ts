import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/types';

export const setCity = createAction<string>('offers/setCity');
export const setOffers = createAction<Offer[]>('offers/setOffers');
export const setActiveOffer = createAction<Offer | null>('offers/setActiveOffer');
export const setSortingOption = createAction<string>('offers/setSortingOption');

