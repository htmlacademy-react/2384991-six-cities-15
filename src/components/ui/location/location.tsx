import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

type LocationProps = {
  city: string;
  isFavoritePage: boolean;
}

function Location({city, isFavoritePage}: LocationProps): JSX.Element {
  const content = (
    <Link className="locations__item-link tabs__item" to={ AppRoute.Root }>
      <span>{city}</span>
    </Link>
  );

  return isFavoritePage ? (
    <div className="locations__item">{content}</div>
  ) : (
    <li className="locations__item">{content}</li>
  );
}

export default Location;
