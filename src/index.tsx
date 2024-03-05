import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import { Setting } from './const.ts';
import { hotelOffers } from './mocks/offers.ts';
import { userReviews } from './mocks/user-reviews.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={hotelOffers} reviews={userReviews} rentalsCount={Setting.RentalsCount}/>
  </React.StrictMode>
);


