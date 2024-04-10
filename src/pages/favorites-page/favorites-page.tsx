import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/index.ts';
import FavoritePlacesList from '../../components/blocks/favorite-places-list/favorite-places-list.tsx';
import { selectAuthorizationStatus, selectFavoriteOffers } from '../../store/selectors.ts';
import { AuthorizationStatus } from '../../const.ts';
import { fetchFavoriteOffers } from '../../store/api-action.ts';

function FavoritesPage(): JSX.Element {
  const favoriteOffers = useAppSelector(selectFavoriteOffers);
  const isEmptyFavoritePage = favoriteOffers.length === 0;
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteOffers());
    }
  }, [dispatch, authorizationStatus]);


  return(
    <>
      <Helmet>
        <title>6 cities. Favorite places to stay</title>
      </Helmet>
      <main className={`page__main page__main--favorites ${isEmptyFavoritePage ? 'page__main--favorites-empty page--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          <section className={`favorites${isEmptyFavoritePage ? ' favorites--empty' : ''}`}>
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
                    <FavoritePlacesList offers={favoriteOffers} />
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
