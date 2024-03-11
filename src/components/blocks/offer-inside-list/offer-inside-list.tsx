import OfferInsideItem from '../../ui/offer-inside-item/offer-inside-item.tsx';

type OfferInsideListProps = {
  goods: string[];
};

function OfferInsideList({ goods }: OfferInsideListProps): JSX.Element {

  return(
    <ul className="offer__inside-list">
      {goods.map((item) => <OfferInsideItem insideItem={item} key={item}/>)}
    </ul>
  );
}

export default OfferInsideList;
