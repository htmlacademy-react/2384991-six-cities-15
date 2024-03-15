import LocationItem from '../../ui/location-item/location-item.tsx';
import { CITIES } from '../../../const.ts';

function LocationList(): JSX.Element {

  return(
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <LocationItem
          city={city}
          isFavoritePage={false}
          key={city}
        />
      ))}
    </ul>
  );
}

export default LocationList;
