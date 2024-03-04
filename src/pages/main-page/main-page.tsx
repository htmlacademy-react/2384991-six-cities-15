import { Helmet } from 'react-helmet-async';
import { hotelOffers } from '../../mocks/mocks.ts';
import HotelList from '../../components/blocks/hotel-list/hotel-list.tsx';
import LocationList from '../../components/blocks/location-list/location-list.tsx';
import Map from '../../components/ui/map/map.tsx';
import SortingForm from '../../components/blocks/sorting-form/sorting-form.tsx';

type MainPageProps = {
  rentalsCount: number;
}

function MainPage({rentalsCount}: MainPageProps): JSX.Element {
  return(
    <>
      <Helmet>
        <title>6 cities.</title>
      </Helmet>
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
              <SortingForm width={7} height={4} />
              <HotelList offers={hotelOffers}/>
            </section>
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainPage;
