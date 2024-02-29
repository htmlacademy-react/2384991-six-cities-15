type LocationProps = {
  city: string;
  isFavoritePage: boolean;
}

function Location({city, isFavoritePage}: LocationProps): JSX.Element {
  const content = (
    <a className="locations__item-link tabs__item" href="#">
      <span>{city}</span>
    </a>
  );

  return isFavoritePage ? (
    <div className="locations__item">{content}</div>
  ) : (
    <li className="locations__item">{content}</li>
  );
}

export default Location;
