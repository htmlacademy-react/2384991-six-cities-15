import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { userReviews } from './mocks/user-reviews.ts';
import { store } from './store/index.ts';
import { fetchOffersAction, checkAuthAction } from './store/api-action.ts';
import App from './components/app/app.tsx';
import ErrorMessage from './components/ui/error-message/error-message.tsx';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App reviews={userReviews}/>
    </Provider>
  </React.StrictMode>
);


