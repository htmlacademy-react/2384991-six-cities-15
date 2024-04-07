import ReviewsItem from '../../ui/review-item/reviews-item';
import { Review } from '../../../types/types.ts';

type ReviewsListProps = {
  reviews: Review[];
}

const compareDates = (reviewA: Review, reviewB: Review) => new Date(reviewB.date).getTime() - new Date(reviewA.date).getTime();

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  const sortedReviews = [...reviews].sort(compareDates);

  const MAX_REVIEWS_COUNT = 10;
  const sortedAndLimitedReviews = sortedReviews.slice(0, MAX_REVIEWS_COUNT);

  return (
    <ul className="reviews__list">
      {sortedAndLimitedReviews.map(({ id, date, user, comment, rating }) => (
        <ReviewsItem
          key={id}
          date={formatDate(date)}
          user={user}
          comment={comment}
          rating={rating}
          id={id}
        />
      ))}
    </ul>
  );
}

export default ReviewsList;
