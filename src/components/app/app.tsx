import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/index.ts';
import { AppRoute, AuthorizationStatus } from '../../const.ts';
import { selectAuthorizationStatus, selectOffersDataLoading } from '../../store/selectors.ts';
import { Review } from '../../types/types.ts';
import MainPage from '../../pages/main-page/main-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import LoginPage from '../../pages/login-page/login-page.tsx';
import Layout from '../layout/layout/layout.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import PrivateRoute from '../routes/private-route/private-route.tsx';
import Spinner from '../ui/spinner/spinner.tsx';


type AppScreenProps = {
  reviews: Review[];
}

function App({ reviews }: AppScreenProps,): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isOffersDataLoading = useAppSelector(selectOffersDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <Spinner />
    );
  }

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
