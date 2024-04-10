import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { createIdGenerator, capitalizeFirstLetter } from '../../utils/common.ts';
import { AuthorizationStatus, CITY_LOCATIONS } from '../../const.ts';
import { useAppSelector, useAppDispatch } from '../../hooks/index.ts';
import HotelList from '../../components/blocks/hotel-list/hotel-list.tsx';
import Map from '../../components/ui/map/map.tsx';
import OfferImage from '../../components/ui/offer-image/offer-image.tsx';
import OfferInsideList from '../../components/blocks/offer-inside-list/offer-inside-list.tsx';
import ReviewsList from '../../components/blocks/reviews-list/reviews-list.tsx';
import RatingForm from '../../components/blocks/rating-form/rating-form.tsx';
import NotFoundPage from '../not-found-page/not-found-page.tsx';
import FavoriteButton from '../../components/ui/favorite-button/favorite-button.tsx';
import { selectAuthorizationStatus, selectCity, selectOfferDetails, selectOfferComments, selectNearbyOffers } from '../../store/selectors.ts';
import { fetchOfferDetailsById, fetchOfferComments, fetchNearbyOffers, fetchFavoriteOffers } from '../../store/api-action.ts';

const offerImageId = createIdGenerator();

const MAX_NEARBY_OFFERS_COUNT = 3;
const MAX_IMAGES_COUNT = 6;

function OfferPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferDetailsById(id)).then((response) => {
        if (response.meta.requestStatus === 'fulfilled') {
          dispatch(fetchOfferComments(id));
          dispatch(fetchNearbyOffers(id));
        }
      });
    }
  }, [id, dispatch]);

  const selectedCity = useAppSelector(selectCity);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const currentOffer = useAppSelector(selectOfferDetails);
  const reviews = useAppSelector(selectOfferComments);
  const nearOffers = useAppSelector(selectNearbyOffers);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteOffers());
    }
  }, [dispatch, authorizationStatus]);

  if (!currentOffer) {
    return <NotFoundPage />;
  }

  const cityInfo = CITY_LOCATIONS.find((city) => city.name === currentOffer.city.name);

  if (!cityInfo) {
    return <div>City information is missing</div>;
  }

  const nearbyOffers = nearOffers.filter((offer) => currentOffer.city.name === selectedCity && offer.id !== currentOffer.id).slice(0, MAX_NEARBY_OFFERS_COUNT);

  const { title, price, type, rating, isPremium, isFavorite, bedrooms, maxAdults, goods, description, host, images } = currentOffer;
  const { name: hostName, avatarUrl, isPro } = host;

  const hotelType = capitalizeFirstLetter(type);

  const roundedRating = Math.round(rating);
  const ratingPercentage = roundedRating * 20;

  const imagesToShow = images.slice(0, MAX_IMAGES_COUNT);

  const bedroomsTitle = `${bedrooms > 1 ? 'bedrooms' : 'bedroom'}`;
  const maxAdultsTitle = `${maxAdults > 1 ? 'adults' : 'adult'}`;
  const offerId = id ?? 'defaultId';

  return(
    <>
      <Helmet>
        <title>6 cities. Our offers</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {imagesToShow.map((image) => (
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
                <FavoriteButton offerId={offerId} isFavorite={isFavorite} width={31} height={33} buttonType="offer" />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${ratingPercentage}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{hotelType}</li>
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
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <OfferInsideList goods={goods}/>
              </div>
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
                {authorizationStatus === AuthorizationStatus.Auth && id && <RatingForm offerId={id} />}
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


