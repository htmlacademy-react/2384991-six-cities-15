import { HotelCardOffers } from '../../../types/types.ts';
import { useState } from 'react';
import { Nullable } from 'vitest';
import HotelCard from '../../ui/hotel-card/hotel-card.tsx';

type HotelListProps = {
  offers: HotelCardOffers[];
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
  // отключила линтер для данной строки т.к. activeOffer до задания с картой пока нигде не используется.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ activeOffer, setActiveOffer ] = useState<Nullable<HotelCardOffers>>(null);

  const handleHover = (offer?: HotelCardOffers) => {
    setActiveOffer(offer || null);
  };

  return (
    <div className={classes.join(' ')}>
      {offers.map((offer) => (
        <HotelCard
          key={offer.id}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          baseClassName={baseClassName}
          {...offer}
          onMouseOver={() => handleHover(offer)}
          onMouseLeave={() => handleHover()}
        />
      ))}
    </div>
  );
}

export default HotelList;
