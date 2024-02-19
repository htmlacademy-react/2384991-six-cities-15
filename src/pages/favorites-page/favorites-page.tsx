import Header from '../../components/layout/header/header.tsx';
import Footer from '../../components/layout/footer/footer.tsx';
import HotelList from '../../components/blocks/hotel-list/hotel-list.tsx';
import { hotelOffers } from '../../mocks/mocks.ts';

function FavoritesPage(): JSX.Element {
  const favoriteOffers = hotelOffers.filter((offer) => offer.isFavorite);

  return(
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <HotelList offers={favoriteOffers} baseClassName="favorites" className="favorites__list" imageWidth={150} imageHeight={110}/>
              </li>
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <HotelList offers={favoriteOffers} baseClassName="favorites" className="favorites__list" imageWidth={150} imageHeight={110}/>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
