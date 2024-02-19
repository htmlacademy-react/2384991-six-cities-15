type OfferInsideProps = {
  insideItem: string;
}

function OfferInsideItem({insideItem}: OfferInsideProps): JSX.Element {
  return(
    <li className="offer__inside-item">{insideItem}</li>
  );
}

export default OfferInsideItem;
