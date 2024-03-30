type PlacesOptionProps = {
  placesOption: string;
  isActive: boolean;
  onClick: (option: string) => void;
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
