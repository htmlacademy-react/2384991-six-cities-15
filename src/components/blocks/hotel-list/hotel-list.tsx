import { HotelCardOffers } from '../../../types/types.ts';
import { useEffect, useState } from 'react';
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

  const [ activeOffer, setActiveOffer ] = useState<Nullable<HotelCardOffers>>(null);

  const handleHover = (offer?: HotelCardOffers) => {
    setActiveOffer(offer || null);
  };

  useEffect(() => {}, [activeOffer]);

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
