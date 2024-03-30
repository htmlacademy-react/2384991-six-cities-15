import { SortingOption } from '../../../types/types.ts';

type PlacesOptionProps = {
  placesOption: SortingOption;
  isActive: boolean;
  onClick: (option: SortingOption) => void;
};

function PlacesOption({ placesOption, isActive, onClick }: PlacesOptionProps): JSX.Element {
  return (
    <li
      className={`places__option ${isActive ? 'places__option--active' : ''}`}
      tabIndex={0}
      onClick={() => onClick(placesOption)}
    >
      {placesOption}
    </li>
  );
}


export default PlacesOption;
