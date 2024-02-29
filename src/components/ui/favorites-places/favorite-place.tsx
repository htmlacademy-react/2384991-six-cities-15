import HotelList from '../../blocks/hotel-list/hotel-list.tsx';
import Location from '../../ui/location/location.tsx';
import { Offer } from '../../../const.ts';

type FavoritePlaceProps = {
  city: string;
  offers: Offer[];
}

function FavoritePlace({city, offers}: FavoritePlaceProps): JSX.Element {

  return(
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <Location city={city} isFavoritePage key={city}/>
      </div>
      <HotelList offers={offers} baseClassName="favorites" className="favorites__list" imageWidth={150} imageHeight={110}/>
    </li>
  );
}

export default FavoritePlace;

