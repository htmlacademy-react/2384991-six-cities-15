import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/types.ts';

export const setCity = createAction<string>('offers/setCity');
export const setOffers = createAction<Offer[]>('offers/setOffers');
