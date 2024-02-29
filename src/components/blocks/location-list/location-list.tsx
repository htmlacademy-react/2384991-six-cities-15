import Location from '../../ui/location/location.tsx';
import { CITIES } from '../../../const.ts';


function LocationList(): JSX.Element {

  return(
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => <Location city={city} isFavoritePage={false} key={city}/>)}
    </ul>
  );
}

export default LocationList;
