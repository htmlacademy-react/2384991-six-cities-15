type LocationProps = {
  city: string;
}

function Location({city}: LocationProps): JSX.Element {
  return(
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}

export default Location;
