import { Offer } from '../../../types/types.ts';
import HotelCard from '../../ui/hotel-card/hotel-card.tsx';

type HotelListProps = {
  offers: Offer[];
  baseClassName?: string;
  className?: string;
  imageWidth?: number;
  imageHeight?: number;
  onHover: (offer?: Offer) => void;
};

function HotelList({ offers, imageWidth = 260, imageHeight = 200, baseClassName = 'cities', className = 'cities__places-list', onHover }: HotelListProps): JSX.Element {
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
          onMouseOver={() => onHover(offer)}
          onMouseLeave={() => onHover()}
        />
      ))}
    </div>
  );
}

export default HotelList;
