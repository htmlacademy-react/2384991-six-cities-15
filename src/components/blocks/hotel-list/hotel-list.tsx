import { hotelOffers } from '../../../mocks/mocks.ts';
import HotelCard from '../../ui/hotel-card/hotel-card.tsx';

type HotelListProps = {
  offers: typeof hotelOffers;
  baseClassName?: string;
  className?: string;
  imageWidth?: number;
  imageHeight?: number;
};

function HotelList({ offers, imageWidth = 260, imageHeight = 200, baseClassName = 'cities', className = 'cities__places-list' }: HotelListProps): JSX.Element {
  const classes = [className, 'places__list'];
  if (className === 'cities__places-list') {
    classes.push('tabs__content');
  }

  return(
    <div className={classes.join(' ')}>
      {offers.map((offer) => (
        <HotelCard
          key={offer.id}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          title={offer.title}
          type={offer.type}
          price={offer.price}
          isFavorite={offer.isFavorite}
          isPremium={offer.isPremium}
          previewImage={offer.previewImage}
          baseClassName={baseClassName}
        />
      ))}
    </div>
  );
}

export default HotelList;
