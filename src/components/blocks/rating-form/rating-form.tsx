import { useState, ChangeEvent } from 'react';
import { MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH, RATING_TITLES } from '../../../const.ts';
import RatingStar from '../../ui/rating-star/rating-star.tsx';


function RatingForm(): JSX.Element {
  const [ review, setReview ] = useState<string>('');
  const [ rating, setRating ] = useState<number>(0);

  const isValid: boolean = review.length >= MIN_REVIEW_LENGTH && review.length <= MAX_REVIEW_LENGTH && rating !== 0;
  const handleTextareaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(evt.target.value);
  };

  const handleRatingChange = (ratingValue: number) => {
    setRating(ratingValue);
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RATING_TITLES.map((title, index) => {
          const ratingValue = 5 - index;
          return (
            <RatingStar
              key={ratingValue}
              id={`${ratingValue}-stars`}
              ratingValue={ratingValue}
              title={title}
              onChange={() => handleRatingChange(ratingValue)}
              checked={rating === ratingValue}
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
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your
          stay with at least{' '}
          <b className="reviews__text-amount">{MIN_REVIEW_LENGTH} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default RatingForm;
