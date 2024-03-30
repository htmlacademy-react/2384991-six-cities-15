import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/index.ts';
import FavoritePlacesList from '../../components/blocks/favorite-places-list/favorite-places-list.tsx';
import { selectOffers } from '../../store/selectors.ts';

function FavoritesPage(): JSX.Element {
  const offers = useAppSelector(selectOffers);
  const isEmptyFavoritePage = offers.filter((offer) => offer.isFavorite).length === 0; // Убедитесь, что фильтруете только избранные предложения

  return(
    <>
      <Helmet>
        <title>6 cities. Favorite places to stay</title>
      </Helmet>
      <main className={`page__main page__main--favorites ${isEmptyFavoritePage ? 'page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          <section className={`favorites ${isEmptyFavoritePage ? 'favorites--empty' : ''}`}>
            {
              isEmptyFavoritePage ?
                (
                  <>
                    <h1 className="visually-hidden">Favorites (empty)</h1>
                    <div className="favorites__status-wrapper">
                      <b className="favorites__status">Nothing yet saved.</b>
                      <p className="favorites__status-description">
                        Save properties to narrow down search or plan your future trips.
                      </p>
                    </div>
                  </>
                ) :
                (
                  <>
                    <h1 className="favorites__title">Saved listing</h1>
                    <FavoritePlacesList offers={offers} />
                  </>
                )
            }
          </section>
        </div>
      </main>
    </>
  );
}

export default FavoritesPage;
