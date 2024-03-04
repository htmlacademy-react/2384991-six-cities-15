import { Helmet } from 'react-helmet-async';
import HotelList from '../../components/blocks/hotel-list/hotel-list.tsx';
import LocationList from '../../components/blocks/location-list/location-list.tsx';
import Map from '../../components/ui/map/map.tsx';
import SortingForm from '../../components/blocks/sorting-form/sorting-form.tsx';
import { Offer } from '../../types/types.ts';

type MainPageProps = {
  rentalsCount: number;
  offers: Offer[];
}

function MainPage({ rentalsCount, offers }: MainPageProps): JSX.Element {
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
              <HotelList offers={offers}/>
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
