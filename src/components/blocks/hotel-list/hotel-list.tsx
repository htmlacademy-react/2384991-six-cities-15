import HotelCard from '../../ui/hotel-card/hotel-card.tsx';
import { Offer } from '../../../types/types.ts';

type HotelListProps = {
  offers: Offer[];
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
      {offers.map(({ id, title, type, price, isFavorite, isPremium, previewImage, rating, city }) => (
        <HotelCard
          key={id}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          {...{title, type, price, isFavorite, isPremium, previewImage, baseClassName, id, rating, city}}
        />
      ))}
    </div>
  );
}


export default HotelList;
