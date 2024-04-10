import { useState, ChangeEvent, FormEvent } from 'react';
import { MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH, RATING_TITLES } from '../../../const.ts';
import RatingStar from '../../ui/rating-star/rating-star.tsx';
import { useAppDispatch } from '../../../hooks/index.ts';
import { postComment } from '../../../store/api-action.ts';
import { setError } from '../../../store/action.ts';
import { TIMEOUT_SHOW_ERROR } from '../../../const.ts';
import { fetchOfferComments } from '../../../store/api-action.ts';

function RatingForm({ offerId }: { offerId: string }): JSX.Element {
  const [review, setReview] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const isValid: boolean = review.length >= MIN_REVIEW_LENGTH && review.length <= MAX_REVIEW_LENGTH && rating !== 0;

  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(evt.target.value);
  };

  const handleRatingChange = (ratingValue: number) => {
    setRating(ratingValue);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (isValid) {
      setIsSubmitting(true);
      dispatch(postComment({ offerId, commentText: review, rating }))
        .unwrap()
        .then(() => {
          setReview('');
          setRating(0);
          dispatch(fetchOfferComments(offerId));
        })
        .catch(() => {
          dispatch(setError('Failed to post comment. Please try again later.'));
          setTimeout(() => {
            dispatch(setError(null));
          }, TIMEOUT_SHOW_ERROR);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_TITLES.map((title, index) => {
          const ratingValue = RATING_TITLES.length - index;
          return (
            <RatingStar
              key={ratingValue}
              id={`${ratingValue}-stars`}
              ratingValue={ratingValue}
              title={title}
              onChange={() => handleRatingChange(ratingValue)}
              checked={rating === ratingValue}
              disabled={isSubmitting}
            />
          );
        })}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={handleTextareaChange}
        disabled={isSubmitting}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_REVIEW_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValid || isSubmitting}>Submit</button>
      </div>
    </form>
  );
}

export default RatingForm;
