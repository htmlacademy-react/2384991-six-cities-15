import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

type LocationProps = {
  city: string;
  isFavoritePage: boolean;
  isActive: boolean;
  onClick: (city: string) => void;
}

function Location({city, isFavoritePage, isActive, onClick}: LocationProps): JSX.Element {
  const content = (
    <Link className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} to={ AppRoute.Root }>
      <span>{city}</span>
    </Link>
  );

  return isFavoritePage ? (
    <div className="locations__item">{content}</div>
  ) : (
    <li className="locations__item" onClick={() => onClick(city)}>{content}</li>
  );
}

export default Location;
