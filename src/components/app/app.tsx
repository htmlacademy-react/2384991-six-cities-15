import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const.ts';
import MainPage from '../../pages/main-page/main-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import LoginPage from '../../pages/login-page/login-page.tsx';
import Layout from '../layout/layout/layout.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import PrivateRoute from '../routes/private-route/private-route.tsx';
import { useAppDispatch } from '../../hooks/index.ts';
import { checkAuthAction } from '../../store/api-action.ts';


function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);

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
                <PrivateRoute>
                  <FavoritesPage/>
                </PrivateRoute>
              }
            />
            <Route
              path={ AppRoute.Offer }
              element={
                <OfferPage />
              }
            />
            <Route
              path={ AppRoute.Login }
              element={
                <PrivateRoute isReverse >
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
