import LocationItem from '../../ui/location-item/location-item.tsx';
import { CITIES } from '../../../const.ts';

type LocationListProps = {
  selectedCity: string;
  onCityClick: (city: string) => void;
}

function LocationList({ onCityClick, selectedCity }: LocationListProps): JSX.Element {

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
