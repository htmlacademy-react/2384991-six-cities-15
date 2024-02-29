type PlacesInsideProps = {
  placesOption: string;
}

function PlacesOption({placesOption}: PlacesInsideProps): JSX.Element {
  return(
    <li className="places__option" tabIndex={0}>{placesOption}</li>
  );
}

export default PlacesOption;
