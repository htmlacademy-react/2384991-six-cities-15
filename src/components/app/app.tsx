import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import MainPage from '../../pages/main-page/main-page.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import LoginPage from '../../pages/login-page/login-page.tsx';
import Layout from '../layout/layout/layout.tsx';
import MainEmptyPage from '../../pages/main-empty-page/main-empty-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';

type AppScreenProps = {
  rentalsCount: number;
}

function App({rentalsCount}: AppScreenProps): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
          <Route index element={<MainPage rentalsCount={rentalsCount} />}/>
          <Route path={AppRoute.Favorites} element={<FavoritesPage />}/>
          <Route path={AppRoute.Offer} element={<OfferPage />}>
            <Route path={AppRoute.OfferId} element={<OfferPage />}/>
          </Route>
          <Route path={AppRoute.Login} element={<LoginPage />}/>
          <Route path={AppRoute.EmptyMain} element={<MainEmptyPage />}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
