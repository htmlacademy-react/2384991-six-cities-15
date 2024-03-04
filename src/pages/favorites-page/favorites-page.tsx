import { Helmet } from 'react-helmet-async';
import FavoritePlacesList from '../../components/blocks/favorite-places-list/favorite-places-list.tsx';

function FavoritesPage(): JSX.Element {
  return(
    <>
      <Helmet>
        <title>6 cities. Favorite places to stay</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritePlacesList />
          </section>
        </div>
      </main>
    </>
  );
}

export default FavoritesPage;
