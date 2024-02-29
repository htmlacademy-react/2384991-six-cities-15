import ReviewsItem from '../../ui/review-item/reviews-item';
import { REVIEW_COUNT } from '../../../const';
import { getRandomInteger, createIdGenerator } from '../../../utils/common';

const reviewId = createIdGenerator();
const reviewsCount = getRandomInteger(REVIEW_COUNT);

function ReviewsList(): JSX.Element {
  return(
    <ul className="reviews__list">
      {Array.from({ length: reviewsCount }).map(() => (
        <ReviewsItem key={reviewId()}/>
      ))}
    </ul>
  );
}

export default ReviewsList;
