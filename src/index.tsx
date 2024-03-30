import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { userReviews } from './mocks/user-reviews.ts';
import { store } from './store/index.ts';
import App from './components/app/app.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App reviews={userReviews}/>
    </Provider>
  </React.StrictMode>
);


