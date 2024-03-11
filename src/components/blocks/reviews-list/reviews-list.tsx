import ReviewsItem from '../../ui/review-item/reviews-item';
import { Review } from '../../../types/types.ts';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map(({ id, date, user, comment, rating }) => (
        <ReviewsItem
          key={id}
          {...{id, date, user, comment, rating}}
        />
      ))}
    </ul>
  );
}

export default ReviewsList;
