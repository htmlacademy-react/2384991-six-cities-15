import PlacesOption from '../../ui/places-option/places-option.tsx';
import { PLACES_OPTION } from '../../../const.ts';

function PlacesOptionsList(): JSX.Element {

  return(
    <ul className="places__options places__options--custom places__options--opened">
      {PLACES_OPTION.map((option) => <PlacesOption placesOption={option} key={option}/>)}
    </ul>
  );
}

export default PlacesOptionsList;
