import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const.ts';
import { getAuthorizationStatus } from '../../utils/authorization-status.ts';
import MainPage from '../../pages/main-page/main-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import LoginPage from '../../pages/login-page/login-page.tsx';
import Layout from '../layout/layout/layout.tsx';
import MainEmptyPage from '../../pages/main-empty-page/main-empty-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import PrivateRoute from '../routes/private-route/private-route.tsx';
import { Review } from '../../types/types.ts';

type AppScreenProps = {
  reviews: Review[];
}

function App({ reviews }: AppScreenProps,): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();

  return(
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ AppRoute.Root } element={ <Layout /> }>
            <Route
              index
              element={
                <MainPage/>
              }
            />
            <Route
              path={ AppRoute.Favorites }
              element={
                <PrivateRoute authorizationStatus={ authorizationStatus }>
                  <FavoritesPage/>
                </PrivateRoute>
              }
            />
            <Route
              path={ AppRoute.Offer }
              element={
                <OfferPage
                  reviews={reviews}
                />
              }
            />
            <Route
              path={ AppRoute.Login }
              element={
                <PrivateRoute authorizationStatus={ authorizationStatus } isReverse>
                  <LoginPage />
                </PrivateRoute>
              }
            />
            <Route
              path={ AppRoute.EmptyMain }
              element={ <MainEmptyPage /> }
            />
            <Route
              path="*"
              element={ <NotFoundPage /> }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
