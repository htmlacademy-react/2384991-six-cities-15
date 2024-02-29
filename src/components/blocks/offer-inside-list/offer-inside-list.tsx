import OfferInsideItem from '../../ui/offer-inside-item/offer-inside-item.tsx';
import { OFFER_INSIDE_ITEMS } from '../../../const.ts';

function OfferInsideList(): JSX.Element {

  return(
    <ul className="offer__inside-list">
      {OFFER_INSIDE_ITEMS.map((item) => <OfferInsideItem insideItem={item} key={item}/>)}
    </ul>
  );
}

export default OfferInsideList;
