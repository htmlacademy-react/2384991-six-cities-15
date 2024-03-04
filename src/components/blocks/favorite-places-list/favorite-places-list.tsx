import FavoritePlace from '../../ui/favorites-places/favorite-place';
import { hotelOffers } from '../../../mocks/offers.ts';
import { Offer } from '../../../types/types.ts';

const groupOffersByCity = (offers: Offer[]) => offers.reduce((accumulator: Record<string, Offer[]>, offer) => {
  const cityName = offer.city.name;
  if (!accumulator[cityName]) {
    accumulator[cityName] = [];
  }
  accumulator[cityName].push(offer);
  return accumulator;
}, {} as Record<string, Offer[]>);

function FavoritePlacesList(): JSX.Element {
  const favoriteOffers = hotelOffers.filter((offer) => offer.isFavorite);
  const groupedOffers = groupOffersByCity(favoriteOffers);

  return(
    <ul className="favorites__list">
      {Object.entries(groupedOffers).map(([city, offers]) => (
        <FavoritePlace key={city} city={city} offers={offers} />
      ))}
    </ul>
  );
}

export default FavoritePlacesList;
