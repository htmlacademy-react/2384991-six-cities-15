import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/types.ts';
import { useState } from 'react';
import { CITY_LOCATIONS } from '../../mocks/offers.ts';
import HotelList from '../../components/blocks/hotel-list/hotel-list.tsx';
import LocationList from '../../components/blocks/location-list/location-list.tsx';
import Map from '../../components/ui/map/map.tsx';
import SortingForm from '../../components/blocks/sorting-form/sorting-form.tsx';

type MainPageProps = {
  offers: Offer[];
}

function MainPage({ offers }: MainPageProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);

  const handleHover = (offer?: Offer) => {
    setActiveOffer(offer || null);
  };

  const placesTitle = offers.length === 1 ? 'place' : 'places';
  const selectedCity = CITY_LOCATIONS['Amsterdam'];

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
              <b className="places__found">{offers.length} {placesTitle} to stay in Amsterdam</b>
              <SortingForm width={7} height={4} />
              <HotelList offers={offers} onHover={handleHover} />
            </section>
            <div className="cities__right-section">
              <Map city={selectedCity} offers={offers} activeOffer={activeOffer} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainPage;
