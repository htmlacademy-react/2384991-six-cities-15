import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/index.ts';
import FavoritePlacesList from '../../components/blocks/favorite-places-list/favorite-places-list.tsx';

function FavoritesPage(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);

  return(
    <>
      <Helmet>
        <title>6 cities. Favorite places to stay</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritePlacesList offers={offers} />
          </section>
        </div>
      </main>
    </>
  );
}

export default FavoritesPage;
