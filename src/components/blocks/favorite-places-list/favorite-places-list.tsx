import FavoritePlace from '../../ui/favorites-place/favorite-place.tsx';
import { Offer } from '../../../types/types.ts';

type FavoritePlacesListProps = {
  offers: Offer[];
  onCityClick: (city: string) => void;
};

const groupOffersByCity = (offers: Offer[]) => offers.reduce((accumulator: Record<string, Offer[]>, offer) => {
  const cityName = offer.city.name;
  if (!accumulator[cityName]) {
    accumulator[cityName] = [];
  }
  accumulator[cityName].push(offer);
  return accumulator;
}, {} as Record<string, Offer[]>);

function FavoritePlacesList({ offers, onCityClick }: FavoritePlacesListProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const groupedOffers = groupOffersByCity(favoriteOffers);

  return(
    <ul className="favorites__list">
      {Object.entries(groupedOffers).map(([city, cityOffers]) => (
        <FavoritePlace key={city} city={city} offers={cityOffers} onCityClick={onCityClick}/>
      ))}
    </ul>
  );
}

export default FavoritePlacesList;
