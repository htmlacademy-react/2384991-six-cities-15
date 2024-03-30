import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Offer, Review } from '../../types/types.ts';
import { createIdGenerator } from '../../utils/common.ts';
import { getAuthorizationStatus } from '../../utils/authorization-status.ts';
import { AuthorizationStatus } from '../../const.ts';
import { useAppSelector } from '../../hooks/index.ts';
import { CITY_LOCATIONS } from '../../const.ts';
import HotelList from '../../components/blocks/hotel-list/hotel-list.tsx';
import Map from '../../components/ui/map/map.tsx';
import OfferImage from '../../components/ui/offer-image/offer-image.tsx';
import OfferInsideList from '../../components/blocks/offer-inside-list/offer-inside-list.tsx';
import ReviewsList from '../../components/blocks/reviews-list/reviews-list.tsx';
import RatingForm from '../../components/blocks/rating-form/rating-form.tsx';
import NotFoundPage from '../not-found-page/not-found-page.tsx';
import { selectCity, selectOffers } from '../../store/selectors.ts';

const offerImageId = createIdGenerator();
const authorizationStatus = getAuthorizationStatus();

type OfferPageProps = {
  reviews: Review[];
};

function OfferPage({ reviews }: OfferPageProps): JSX.Element {
  const { id } = useParams();
  const selectedCity = useAppSelector(selectCity);
  const offers = useAppSelector(selectOffers);

  const currentOffer: Offer | undefined = offers.find((offer) => offer.id === id);
  if (!currentOffer) {
    return <NotFoundPage />;
  }

  const cityInfo = CITY_LOCATIONS.find((city) => city.name === currentOffer.city.name);

  if (!cityInfo) {
    return <div>City information is missing</div>;
  }

  const MAX_NEARBY_OFFERS_COUNT = 3;
  const nearbyOffers = offers.filter((offer) => offer.city.name === selectedCity && offer.id !== currentOffer.id).slice(0, MAX_NEARBY_OFFERS_COUNT);

  const { title, price, type, rating, isPremium, isFavorite, bedrooms, maxAdults, goods, description, host, images } = currentOffer;
  const { name: hostName, avatarUrl, isPro } = host;

  const bedroomsTitle = `${bedrooms > 1 ? 'bedrooms' : 'bedroom'}`;
  const maxAdultsTitle = `${maxAdults > 1 ? 'adults' : 'adult'}`;

  return(
    <>
      <Helmet>
        <title>6 cities. Our offers</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((image) => (
                <OfferImage key={offerImageId()} src={image} />
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button className={`offer__bookmark-button button${isFavorite ? ' offer__bookmark-button--active' : ''}`} type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${rating * 20}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{type}</li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} {bedroomsTitle}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} {maxAdultsTitle}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              {goods.length > 1 ?
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos;s inside</h2>
                  <OfferInsideList goods={goods}/>
                </div> :
                ''}
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper user__avatar-wrapper${isPro ? ' offer__avatar-wrapper--pro' : ''}`}>
                    <img
                      className="offer__avatar user__avatar"
                      src={avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{hostName}</span>
                  {isPro ? <span className="offer__user-status">Pro</span> : ''}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewsList reviews={reviews}/>
                { authorizationStatus === AuthorizationStatus.Auth ? <RatingForm /> : '' }
              </section>
            </div>
          </div>
          <Map city={cityInfo.location} offers={[...nearbyOffers, currentOffer]} activeOffer={currentOffer} baseClassName="offer" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighborhood</h2>
            <HotelList offers={nearbyOffers} baseClassName="near-places" className="near-places__list"/>
          </section>
        </div>
      </main>
    </>
  );
}

export default OfferPage;


