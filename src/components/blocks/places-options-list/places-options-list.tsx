import PlacesOption from '../../ui/places-option/places-option.tsx';
import { PLACES_OPTIONS } from '../../../const.ts';
import { SortingOption } from '../../../types/types.ts';

type PlacesOptionsListProps = {
  onOptionClick: (option: SortingOption) => void;
  currentOption: string;
  isOpen: boolean;
}

function PlacesOptionsList({ currentOption, onOptionClick, isOpen }: PlacesOptionsListProps): JSX.Element {

  return(
    <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
      {PLACES_OPTIONS.map((option) => (
        <PlacesOption
          placesOption={option}
          key={option}
          isActive={option === currentOption}
          onClick={onOptionClick}
        />))}
    </ul>
  );
}

export default PlacesOptionsList;
