import { Review } from '../../../types/types.ts';

function ReviewsItem({ date, user, comment, rating }: Review): JSX.Element {
  const reviewDate = new Date(date);
  const humanDate = reviewDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });

  const computerDate = date.toString().slice(0, 10);

  return(
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={computerDate}>
          {humanDate}
        </time>
      </div>
    </li>
  );
}

export default ReviewsItem;
