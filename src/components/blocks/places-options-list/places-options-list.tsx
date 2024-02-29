import PlacesOption from '../../ui/places-option/places-option.tsx';
import { PLACES_OPTIONS } from '../../../const.ts';

function PlacesOptionsList(): JSX.Element {

  return(
    <ul className="places__options places__options--custom places__options--opened">
      {PLACES_OPTIONS.map((option) => <PlacesOption placesOption={option} key={option}/>)}
    </ul>
  );
}

export default PlacesOptionsList;
