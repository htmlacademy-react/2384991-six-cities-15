import { getRandomInteger } from '../../../utils/common.ts';
import { MAX_PHOTO_COUNT } from '../../../const.ts';

function OfferImage(): JSX.Element {
  return(
    <div className="offer__image-wrapper">
      <img
        className="offer__image"
        src={`img/apartment-0${getRandomInteger(MAX_PHOTO_COUNT)}.jpg`}
        alt="Photo studio"
      />
    </div>
  );
}

export default OfferImage;
