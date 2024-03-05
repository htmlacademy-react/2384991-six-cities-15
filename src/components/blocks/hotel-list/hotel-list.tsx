import HotelCard from '../../ui/hotel-card/hotel-card.tsx';
import { HotelСardOffers } from '../../../types/types.ts';

type HotelListProps = {
  offers: HotelСardOffers[];
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
      {offers.map((offer) => (
        <HotelCard
          key={offer.id}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          baseClassName={baseClassName}
          {...offer}
        />
      ))}
    </div>
  );
}

export default HotelList;
