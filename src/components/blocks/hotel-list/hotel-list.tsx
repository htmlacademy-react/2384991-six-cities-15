import HotelCard from '../../ui/hotel-card/hotel-card.tsx';
import { hotelOffers } from '../../../mocks/mocks.ts';

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

  return (
    <div className={classes.join(' ')}>
      {offers && offers.map(({ id, title, type, price, isFavorite, isPremium, previewImage }) => (
        <HotelCard
          key={id}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          title={title}
          type={type}
          price={price}
          isFavorite={isFavorite}
          isPremium={isPremium}
          previewImage={previewImage}
          baseClassName={baseClassName}
        />
      ))}
    </div>
  );
}


export default HotelList;
