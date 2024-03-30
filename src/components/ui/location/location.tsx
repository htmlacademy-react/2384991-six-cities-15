import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { useAppDispatch } from '../../../hooks';
import { setCity } from '../../../store/action';

type LocationProps = {
  city: string;
  isFavoritePage: boolean;
  isActive?: boolean;
  onClick?: (city: string) => void | undefined;
}

function Location({city, isFavoritePage, isActive, onClick}: LocationProps): JSX.Element {
  const dispatch = useAppDispatch();

  const content = (
    <Link className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} to={ AppRoute.Root }>
      <span>{city}</span>
    </Link>
  );

  const handleOnClick = () => {
    dispatch(setCity(city));
    if (onClick) {
      onClick(city);
    }
  };

  return isFavoritePage ? (
    <div className="locations__item" onClick={handleOnClick}>{content}</div>
  ) : (
    <li className="locations__item" onClick={handleOnClick}>{content}</li>
  );
}

export default Location;
