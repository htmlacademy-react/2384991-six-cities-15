import LocationItem from '../../ui/location/location.tsx';
import { CITIES } from '../../../const.ts';

type LocationListProps = {
  selectedCity: string;
  onCityClick: (city: string) => void;
}

function LocationList({ selectedCity, onCityClick }: LocationListProps): JSX.Element {

  return(
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <LocationItem
          city={city}
          isActive={city === selectedCity}
          isFavoritePage={false}
          key={city}
          onClick={onCityClick}
        />
      ))}
    </ul>
  );
}

export default LocationList;
