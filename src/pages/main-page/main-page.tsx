import HotelList from '../../components/blocks/hotel-list/hotel-list.tsx';
import LocationList from '../../components/blocks/location-list/location-list.tsx';
import Map from '../../components/ui/map/map.tsx';
import Header from '../../components/layout/header/header.tsx';
import PlacesOptionsList from '../../components/blocks/places-options-list/places-options-list.tsx';
import { hotelOffers } from '../../mocks/mocks.ts';

type MainPageProps = {
  rentalsCount: number;
}

function MainPage({rentalsCount}: MainPageProps): JSX.Element {
  return(
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{rentalsCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <PlacesOptionsList />
              </form>
              <HotelList offers={hotelOffers}/>
            </section>
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
