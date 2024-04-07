import { Link } from 'react-router-dom';
import { HotelCardOffers } from '../../../types/types.ts';
import { capitalizeFirstLetter } from '../../../utils/common.ts';

type HotelCardAdditionalProps = {
  imageWidth: number;
  imageHeight: number;
  baseClassName?: string;
  onMouseOver: () => void;
  onMouseLeave: () => void;
}

type HotelCardProps = HotelCardOffers & HotelCardAdditionalProps;

function HotelCard({ imageWidth, imageHeight, baseClassName = 'cities', title, type, price, isFavorite, isPremium, previewImage, rating, id, onMouseOver, onMouseLeave }: HotelCardProps): JSX.Element {
  const hotelType = capitalizeFirstLetter(type);
  const roundedRating = Math.round(rating);
  const ratingPercentage = roundedRating * 20;

  return(
    <article
      className={`${baseClassName}__card place-card`}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${baseClassName}__image-wrapper place-card__image-wrapper`}>
        <Link to={ `/offer/${id}` }>
          <img
            className="place-card__image"
            src={previewImage}
            width={imageWidth}
            height={imageHeight}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingPercentage}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{hotelType}</p>
      </div>
    </article>
  );
}

export default HotelCard;

